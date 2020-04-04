# lab 6
Задание:\
    — Перенесите массив lessons из AppProps в AppState;\
    — Добавьте компонент AddLesson, который позволяет добавить урок в массив lessons. 
    Другие компоненты (кроме App и AddLesson) не должны изменяться, но должны корректно работать.\

Перенос массива lessons из свойств AppProps в состояния AppState:

    interface AppProps : RProps {
        var students: Array<Student>
    }

    interface AppState : RState {
        var lessons: Array<Lesson>
        var presents: Array<Array<Boolean>>
    }

Также произведен рефакторинг функции componentWillMount для корректной работы компонента App:

    override fun componentWillMount() {
        state.lessons = lessonsList
        state.presents = Array(state.lessons.size) {
            Array(props.students.size) { false }
        }
    }
    
Вид приложения после загрузки:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/onLoad.PNG)

После добавления занятия "Homework" приложение выглядит так:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/newElement.PNG)

Клик по студентам "Sheldon Cooper" и "Leonard Hofstadter" внутри созданного занятия "Homework":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/onClick.PNG)

Добавление ещё одного занатия "Self education":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/anotherElement.PNG)

Для реализации компонента "AddLesson" внесены изменения в компонент "App":

    override fun RBuilder.render() {
        h1 { +"App" }
        addLesson(handleEvent())
        lessonListFull(
        ...)
        
Функция "addLesson", добавляющая новое занятие, вызывает другую функцию "handleEvent", 
которая просто обновляет массив lessons добавляя набранный в строку предмет:

    fun handleEvent():(String) -> Unit = { lesson->
        setState {
            lessons += Lesson(lesson)
            presents += arrayOf(Array(props.students.size){false})
        }
    }
    
Компонент "AddLesson" содержит следуйщий код:

    package component

    import kotlinx.html.*
    import kotlinx.html.js.onClickFunction
    import org.w3c.dom.HTMLInputElement
    import react.*
    import react.dom.*
    import kotlin.browser.document

    interface lessonProps :RProps{
        var onClick : (String)  -> Unit
    }

    val fAddLesson =
        functionalComponent<lessonProps>{
            input(InputType.text) {
                attrs.id="lessonName"
                attrs.placeholder= "Enter lesson name"
            }
            button {
                +"+"
                val alias=it.onClick
                attrs.onClickFunction = {
                    val lesson = document.getElementById("lessonName") as HTMLInputElement
                    alias(lesson.value)
                }
            }
        }

    fun RBuilder.addLesson(
        onClick : (String)  -> Unit
    )=child(fAddLesson){
        attrs.onClick=onClick
    }
    
Весь исходный код в папке scr/main/kotlin/component
