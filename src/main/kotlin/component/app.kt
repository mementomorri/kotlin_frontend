package component

import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.router.dom.*

interface AppState : RState {
    var lessons: Array<Lesson>
    var students: Array<Student>
    var presents: Array<Array<Boolean>>
}

interface RouteNumberResult : RProps {
    var number: String
}

fun RouteResultProps<RouteNumberResult>.num()=
    this.match.params.number.toIntOrNull() ?: -1

class App : RComponent<RProps, AppState>() {
    override fun componentWillMount() {
        state.students= studentList()
        state.lessons= lessonsList()
        state.presents = Array(state.lessons.size) {
            Array(state.students.size) { false }
        }
    }

    override fun RBuilder.render() {
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
                        state.lessons,
                        "Lessons",
                        "/lessons",
                        addLesson(),
                        removeLesson())
                }
            )
            route("/students",
                exact = true,
                render = {
                    anyList(
                        state.students,
                        "Students",
                        "/students",
                        addStudent(),
                        removeStudent())
                }
            )
            route("/lessons/:number",
                exact = true,
                render = { route_props: RouteResultProps<RouteNumberResult> ->
                    val num = route_props.match.params.number.toIntOrNull() ?: -1
                    val lesson = state.lessons.getOrNull(num)
                    if (lesson != null)
                        anyFull(
                            RBuilder::student,
                            lesson,
                            state.students,
                            state.presents[num]
                        ) { onClick(num, it) }
                    else
                        p { +"No such lesson" }
                }
            )
            route("/students/:number",
                exact = true,
                render = { route_props: RouteResultProps<RouteNumberResult> ->
                    val num = route_props.match.params.number.toIntOrNull() ?: -1
                    val student = state.students.getOrNull(num)
                    if (student != null)
                        anyFull(
                            RBuilder::lesson,
                            student,
                            state.lessons,
                            state.presents.map {
                                it[num]
                            }.toTypedArray()
                        ) { onClick(it, num) }
                    else
                        p { +"No such student" }
                }
            )
            route(
                "/lessons/:number/edit",
                render = { route_props: RouteResultProps<RouteNumberResult> ->
                    val num = route_props.num()
                    val lesson = state.lessons[num]
                    lessonEdit(
                        num,
                        lesson,
                        editLesson(),
                        removeLesson()
                        )
                }
            )
            route(
                "/students/:number/edit",
                render = { route_props: RouteResultProps<RouteNumberResult> ->
                    val num = route_props.num()
                    val students = state.students[num]
                    studentEdit(
                        num,
                        students,
                        editStudent(),
                        removeStudent()
                    )
                }
            )
        }
    }
    fun onClick(indexLesson: Int, indexStudent: Int) =
        { _: Event ->
            setState {
                presents[indexLesson][indexStudent] =
                    !presents[indexLesson][indexStudent]
            }
        }
    fun addLesson():(Event) -> Unit = {
        setState {
            lessons += Lesson("new lesson")
            presents += arrayOf(Array(state.students.size){false})
        }
    }
    fun addStudent():(Event)->Unit={
        setState{
            students+=Student("New","Student")
        }
    }
    fun removeLesson():(Int) -> Unit = {Int ->
        setState{
            lessons=state.lessons.copyOfRange(0,Int)+
                    state.lessons.copyOfRange(Int+1,state.lessons.size)
            presents=state.presents.copyOfRange(0,Int)+
                    state.presents.copyOfRange(Int+1,state.presents.size)
        }
    }
    fun removeStudent():(Int) -> Unit = {Int ->
        setState{
            students=state.students.copyOfRange(0,Int)+
                    state.students.copyOfRange(Int+1,state.students.size)
        }
    }
    fun editLesson():(Lesson) -> Unit={Lesson->
        setState{
            lessons+= Lesson
            presents+= arrayOf(Array(state.students.size){false})
        }
    }
    fun editStudent():(Student) -> Unit={Student->
        setState{
            students+= Student
        }
    }
}

fun RBuilder.app(
) =
    child(
        withDisplayName("AppHoc", App::class)
    ) {
    }





