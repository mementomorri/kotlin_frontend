package components

import data.*
import org.w3c.dom.events.Event
import react.*
import react.dom.*

interface RClasses : RProps {
    var nameOfClass: Array<nameOfClass>
    var students :Array<Student>
}

interface RStudentListState :RState{
    var present: Array<Boolean>
}

class RStudentClasses : RComponent<RClasses, RStudentListState>(){
    override fun componentWillMount() {
        state.apply {
            present = Array(props.students.size){false}
        }
    }
    override fun RBuilder.render() {
        select {
            props.nameOfClass.map {
                option { +it.name }
            }
        }
        ol {
            fStudentList(props.students,state.present, onIndex())
        }
    }
    fun RBuilder.onIndex(): (Int) -> (Event) -> Unit = {
        onClick(it)
    }
    fun RBuilder.onClick(index: Int) :(Event) -> Unit = {
        setState {
            present[index] = !present[index]
        }
    }
}
fun RBuilder.RClasses(students: Array<Student>, nameOfClass: Array<nameOfClass>) =
    child(RStudentClasses::class){
        attrs.students = students
        attrs.nameOfClass = nameOfClass
    }

