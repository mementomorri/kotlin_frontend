package container

import component.*
import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import redux.*
import react.redux.rConnect

interface AnyFullDispatchProps : RProps {
    var onClick: (Int) -> (Event) -> Unit
}

interface AnyFullStateProps<O, S> : RProps {
    var subobjs: Map<Int, S>
    var presents: Map<Int, Boolean>?
}

interface AnyFullOwnProps<O> : RProps {
    var obj: Pair<Int, O>
}

fun <o> getVisible(
    obj:Map<Int, o>,
    presents: Map<Int, Boolean>?,
    filter: VisibilityFilter
): Map<Int, o> = when(filter){
    VisibilityFilter.SHOW_ALL -> obj
    VisibilityFilter.SHOW_ABSENT ->{
        getAbsentOrPresent(obj, presents, true)
    }
    VisibilityFilter.SHOW_PRESENT ->{
        getAbsentOrPresent(obj, presents, false)
    }
}

private fun <o> getAbsentOrPresent(
    obj: Map<Int, o>,
    presents: Map<Int, Boolean>?,
    present:Boolean
): MutableMap<Int, o> {
    val mutableMapOfObj = obj.toMutableMap()
    mutableMapOfObj.clear()
    if (presents != null) {
        presents.filter {if (present) !it.value else it.value }.map {
            mutableMapOfObj[it.key] = obj.getValue(it.key)
        }
    }
    return mutableMapOfObj
}

val lessonFullContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            AnyFullOwnProps<Lesson>,
            AnyFullStateProps<Lesson, Student>,
            AnyFullDispatchProps,
            AnyFullProps<Lesson, Student>>(
        { state, ownProps ->
            subobjs = getVisible(state.students, state.presents[ownProps.obj.first], state.visibilityFilter)
            presents = state.presents[ownProps.obj.first]
        },
        { dispatch, ownProps ->
            onClick =
                { index ->
                    {
                        dispatch(ChangePresent(ownProps.obj.first, index))
                    }
                }
        }
    )(
        withDisplayName(
            "LessonFull",
            fAnyFull<Lesson, Student>(RBuilder::student)
        )
            .unsafeCast<RClass<AnyFullProps<Lesson, Student>>>()
    )

val studentFullContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            AnyFullOwnProps<Student>,
            AnyFullStateProps<Student, Lesson>,
            AnyFullDispatchProps,
            AnyFullProps<Student, Lesson>>(
        { state, ownProps ->
            subobjs = getVisible(state.lessons, state.presentsStudent(ownProps.obj.first), state.visibilityFilter)
            presents = state.presentsStudent(ownProps.obj.first)
        },
        { dispatch, ownProps ->
            onClick = { index ->
                {
                    dispatch(ChangePresent(index, ownProps.obj.first))
                }
            }
        }
    )(
        withDisplayName(
            "StudentFull",
            fAnyFull<Student, Lesson>(RBuilder::lesson)
        )
            .unsafeCast<RClass<AnyFullProps<Student, Lesson>>>()
    )