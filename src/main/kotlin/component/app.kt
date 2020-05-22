package component

import container.*
import data.*
import react.*
import react.dom.*
import react.router.dom.*

interface AppProps : RProps {
    var multipleChoiceQuestions: Map<Int, MultipleChoice>
    var trueFalseQuestions: Map<Int, TrueFalse>
}

interface RouteNumberResult : RProps {
    var number: String
}

fun fApp() =
    functionalComponent<AppProps> { props ->
        header {
            h1 { +"Moodle questions editing" }
            nav {
                ul {
                    li { navLink("/MCQuestions") { +"Multiple choice questions" } }
                    li { navLink("/TFQuestions") { +"True/False questions" } }
                }
            }
        }

        switch {
            route("/MCQuestions",
                exact = true,
                render = { multipleChoiceListContainer { } }
            )
            route("/TFQuestions",
                exact = true,
                render = { trueFalseListContainer {} }
            )
            route(
                "/MCQuestions/:number",
                exact = true,
                render = renderObject(
                    { props.multipleChoiceQuestions[it] },
                    { index, MCQuestion ->
                        multipleChoiceFullContainer {
                            attrs.keyQuestionPair = index to MCQuestion
                        }
                    }
                )
            )
            route(
                "/TFQuestions/:number",
                exact = true,
                render = renderObject(
                    { props.trueFalseQuestions[it] },
                    { index, TFQuestion ->
                        trueFalseFullContainer {
                            attrs.keyQuestionPair = index to TFQuestion
                        }
                    }
                )
            )
            route(
                "/MCQuestions/:number/edit",
                render = renderObject(
                    { props.multipleChoiceQuestions[it] },
                    { index, MCQuestion ->
                        multipleChoiceEditContainer {
                            attrs.MultipleChoice = index to MCQuestion
                        }
                    }
                )
            )
            route(
                "/TFQuestions/:number/edit",
                render = renderObject(
                    { props.trueFalseQuestions[it] },
                    { index, TFQuestion ->
                        trueFalseEditContainer {
                            attrs.TrueFalse = index to TFQuestion
                        }
                    }
                )
            )
        }
    }

fun <O> RBuilder.renderObject(
    selector: (Int) -> O?,
    rElement: (Int, O) -> ReactElement
) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val obj = selector(num)
        if (obj != null)
            rElement(num, obj)
        else
            p { +"Object not found" }
    }
