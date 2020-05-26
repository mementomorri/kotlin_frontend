package component

import data.*
import org.w3c.dom.events.Event
import react.*
import react.dom.br
import react.dom.h1

interface AppState : RState {
    var students: Array<Student>
    var lessons: Array<Lesson>
    var presents: Array<Array<Boolean>>
}

class App : RComponent<RProps, AppState>() {
    override fun componentWillMount() {
        state.students = studentList
        state.lessons = lessonsList
        state.presents = Array(state.lessons.size) {
            Array(state.students.size) { false }
        }
    }

    override fun RBuilder.render() {
        h1 { +"App" }
        addLesson(addObjectToArray<Lesson>())
        br {  }
        addStudent(addObjectToArray<Student>())
        lessonListFull(
            state.lessons,
            state.students,
            state.presents,
            onClickLessonFull
        )
        studentListFull(
            state.lessons,
            state.students,
            state.presents,
            onClickStudentFull
        )
    }


    fun onClick(indexLesson: Int, indexStudent: Int) =
        { _: Event ->
            setState {
                presents[indexLesson][indexStudent] =
                    !presents[indexLesson][indexStudent]
            }
        }

    val onClickLessonFull =
        { indexLesson: Int ->
            { indexStudent: Int ->
                onClick(indexLesson, indexStudent)
            }
        }

    val onClickStudentFull =
        { indexStudent: Int ->
            { indexLesson: Int ->
                onClick(indexLesson, indexStudent)
            }
        }

    fun <obj>addObjectToArray():(obj) -> Unit = { obj ->
        setState {
            if (obj is Lesson) lessons+=obj
            if (obj is Student) students+=obj
            presents += arrayOf(Array(state.students.size){false})
        }
    }
}


fun RBuilder.app(
) = child(App::class) {}