package component

import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.router.dom.*
import redux.*

interface AppProps : RProps {
    var store: Store<State, RAction, WrapperAction>
}

val AppProps.lessons
    get() = this.store.state.lessons
val AppProps.students
    get() = this.store.state.students

interface RouteNumberResult : RProps {
    var number: String
}
fun RouteResultProps<RouteNumberResult>.num()=
    this.match.params.number.toIntOrNull() ?: -1

fun fApp() =
    functionalComponent<AppProps> { props ->
        header {
            h1 { +"App" }
            nav {
                ul {
                    li { navLink("/lessons") { +"Lessons" } }
                    li { navLink("/students") { +"Students" } }
                }
            }
        }

        switch {
            route("/lessons",
                exact = true,
                render = {
                    anyList(
                        props.store.getState().lessons,
                        "Lessons",
                        "/lessons",
                        props.addLesson(),
                        props.removeLesson())
                }
            )
            route("/students",
                exact = true,
                render = {
                    anyList(
                        props.store.getState().students,
                        "Students",
                        "/students",
                        props.addStudent(),
                        props.removeStudent())
                }
            )
            route("/lessons/:number",
                exact = true,
                render = renderLesson(props)
            )
            route("/students/:number",
                exact = true,
                render = renderStudent(props)
            )
            route(
                "/lessons/:number/edit",
                render = renderLessonEdit(props)
            )
            route(
                "/students/:number/edit",
                render = renderStudentEdit(props)
            )
        }
    }

fun AppProps.onClickStudent(num: Int): (Int) -> (Event) -> Unit =
    { index ->
        {
            store.dispatch(ChangePresent(index, num))
        }
    }

fun AppProps.onClickLesson(num: Int): (Int) -> (Event) -> Unit =
    { index ->
        {
            store.dispatch(ChangePresent(num, index))
        }
    }

fun AppProps.addLesson():(Event) -> Unit={
    store.dispatch(addLesson(it))
}

fun AppProps.addStudent():(Event) -> Unit={
    store.dispatch(addStudent(it))
}

fun AppProps.removeLesson():(Int) -> Unit = {Int ->
    store.dispatch(removeLesson(Int))
}

fun AppProps.removeStudent():(Int) -> Unit = {Int ->
    store.dispatch(removeStudent(Int))
}

fun AppProps.editLesson():(Lesson) -> Unit={Lesson->
    store.dispatch(editLesson(Lesson))
}
fun AppProps.editStudent():(Student) -> Unit={Student->
    store.dispatch(editStudent(Student))
}

fun RBuilder.renderLesson(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val lesson = props.lessons.getOrNull(num)
        if (lesson != null)
            anyFull(
                RBuilder::student,
                lesson,
                props.store.getState().students,
                props.store.getState().presents[num],
                props.onClickLesson(num)
            )
        else
            p { +"No such lesson" }
    }

fun RBuilder.renderStudent(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val student = props.students.getOrNull(num)
        if (student != null)
            anyFull(
                RBuilder::lesson,
                student,
                props.store.getState().lessons,
                props.store.getState().presents.map {
                    it[num]
                }.toTypedArray(),
                props.onClickStudent(num)
            )
        else
            p { +"No such student" }
    }

fun RBuilder.renderLessonEdit(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.num()
        val lesson = props.lessons[num]
        if (lesson != null) {
            lessonEdit(
                num,
                lesson,
                props.editLesson(),
                props.removeLesson()
            )
        }
        else
            p { +"No such lesson" }
    }

fun RBuilder.renderStudentEdit(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.num()
        val student = props.students[num]
        if (student != null) {
            studentEdit(
                num,
                student,
                props.editStudent(),
                props.removeStudent()
            )
        }
        else
            p { +"No such student" }
    }

fun RBuilder.app(
    store: Store<State, RAction, WrapperAction>
) =
    child(
        withDisplayName("App", fApp())
    ) {
        attrs.store = store
    }





