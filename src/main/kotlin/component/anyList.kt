package component

import hoc.withDisplayName
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent
import react.router.dom.navLink

interface AnyListProps<O> : RProps {
    var objs: Array<O>
    var add: (Event) -> Unit
    var remove: (Int) -> Unit
}

fun <O> fAnyList(
    name: String,
    path: String) =
    functionalComponent<AnyListProps<O>> { props ->
        h2 { +name }
        span("fakeLink") {
            +"Add"
            attrs.onClickFunction = props.add}
        table {
            props.objs.mapIndexed { index, obj ->
                tr {
                    attrs.id="${index+1}"
                    td {
                        navLink("$path/$index") {
                            +obj.toString()
                        }
                    }
                    td {
                        navLink("$path/${index}/edit") {
                            +" Edit "
                        }
                    }
                    td {
                        span("fakeLink") {
                            +" Delete"
                            attrs.onClickFunction = {
                                props.remove(index)
                            }
                        }
                    }
                }
            }
        }
    }

fun <O> RBuilder.anyList(
    anys: Array<O>,
    name: String,
    path: String,
    add:(Event) -> Unit,
    remove: (Int) -> Unit
) = child(
    withDisplayName(name, fAnyList<O>(name, path))
) {
    attrs.objs = anys
    attrs.add=add
    attrs.remove=remove
}

