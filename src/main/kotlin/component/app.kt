package component

import data.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import react.*
import react.dom.br
import react.dom.button
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
        addLesson(addLessonToArray())
        br {  }
        addStudent(addStudentToArray())
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
//            transform(state.presents),
            onClickStudentFull
        )
    }

    fun transform(source: Array<Array<Boolean>>) =
        Array(source[0].size){row->
            Array(source.size){col ->
                source[col][row]
            }
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

    fun addLessonToArray():(Lesson) -> Unit = { lesson->
        setState {
            lessons += lesson
            presents += arrayOf(Array(state.students.size){false})
        }
    }
    fun addStudentToArray():(Student) -> Unit = {Student->
        setState {
            students += Student
            presents += arrayOf(Array(state.students.size){false})
        }
    }
}


fun RBuilder.app(
) = child(App::class) {}