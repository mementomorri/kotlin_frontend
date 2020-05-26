# lab 6
Задание:\
    — Перенесите массив "lessons" из "AppProps" в "AppState";\
    — Добавьте компонент "AddLesson", который позволяет добавить урок в массив "lessons". 
    Другие компоненты (кроме "App" и "AddLesson") не должны изменяться, но должны корректно работать.

Вид приложения после загрузки:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/onLoad3.PNG)

После добавления занятия "Homework" приложение выглядит так:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/newElement3.PNG)

Клик по студентам "Sheldon Cooper" и "Leonard Hofstadter" внутри созданного занятия "Homework":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/onClick3.PNG)

Добавление ещё одного занатия "Self education":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/anotherElement3.PNG)

Перенос массива "lessons" из свойств "AppProps" в состояния "AppState":

    interface AppProps : RProps {
        var students: Array<Student>
    }

    interface AppState : RState {
        var lessons: Array<Lesson>
        var presents: Array<Array<Boolean>>
    }

Рефакторинг функции "componentWillMount" внутри компонента "App" для корректной его работы:

    override fun componentWillMount() {
        state.lessons = lessonsList
        state.presents = Array(state.lessons.size) {
            Array(props.students.size) { false }
        }
    }
    
Для реализации компонента "AddLesson" внесены изменения в порядок отрисовываемых компонентов:

    override fun RBuilder.render() {
        h1 { +"App" }
        addLesson(addLessonToArray())
        lessonListFull(
        ...)
        
Функция "addLesson", добавляющая новое занятие, вызывает другую функцию "addLessonToArray", 
которая просто обновляет массив "lessons" добавляя набранный в строку предмет:

    fun addLessonToArray():(Lesson) -> Unit = { lesson->
        setState {
            lessons += lesson
            presents += arrayOf(Array(state.students.size){false})
        }
    }
    
Компонент "AddLesson" содержит следуйщий код:

    interface lessonProps :RProps{
    var onClick : (Lesson)  -> Unit
    }

    val fAddLesson =
        functionalComponent<lessonProps>{props->
            span { +"Enter new lesson name:" }
            br {  }
            span {
                input() {
                    attrs.id = "lessonName"
                    attrs.placeholder = "lesson name"
                }
                button {
                    +"add lesson"
                    attrs.onClickFunction = {
                        val lessonName = document
                            .getElementById("lessonName")
                                as HTMLInputElement
                        props.onClick(Lesson(lessonName.value))
                    }
                }
            }
        }

    fun RBuilder.addLesson(
        onClick : (Lesson)  -> Unit
    )=child(fAddLesson){
        attrs.onClick=onClick
    }
    
Как видно из написанного кода, компонент добавляет строку и кнопку рядом со строкой, при нажатии кнопки компонент берет текст из строки и формирует его в данные типа "lesson" возвращая результат функции "onClick".

# Защита шестой лабораторной работы
Задание:\
    — Добавьте компонент "addStudent", который позволяет добавить студента в массив "students". 

Вид приложения после загрузки:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/onLoad2.PNG)

После добавления студента "Rajesh Ramayan" приложение выглядит так:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/newElement2.PNG)

Клик по студентам "Rajesh Ramayan" в "Lecture" и "Howard Wolowitz" в "Practice":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab6/screenshots/onClick2.PNG)

Перенос массива "sudents" из свойств "AppProps" в состояния "AppState":

    interface AppState : RState {
        var students: Array<Student>
        var lessons: Array<Lesson>
        var presents: Array<Array<Boolean>>
    }

Таким образом "AppProps" становится не нужен, от него можно избавиться и вместо него можно использовать стандартный RProps.
Также произведен рефакторинг функции "componentWillMount" внутри компонента "App" для корректной его работы:

    override fun componentWillMount() {
        state.students = studentsList
        state.lessons = lessonsList
        state.presents = Array(state.lessons.size) {
            Array(props.students.size) { false }
        }
    }
    
Для реализации компонента "addStudent" внесены изменения в порядок отрисовываемых компонентов:

    override fun RBuilder.render() {
        h1 { +"App" }
        addLesson(addLessonToArray())
        br {  }
        addStudent(addStudentToArray())
        lessonListFull(
        ...)
        
Функция "addStudent", добавляющая нового студента, имеет в качестве аргумента вспомогательную функцию "addStudentToArray", 
которая просто обновляет массив "students" добавляя набранное в строку имя:

    fun addStudentToArray():(Student) -> Unit = {Student->
        setState {
            students += Student
            presents += arrayOf(Array(state.students.size){false})
        }
    }
    
Компонент "addStudent" содержит следуйщий код:

    interface StudentEditProps : RProps {
        var onClick: (Student) -> Unit
    }

    val fAddstudent =
        functionalComponent<StudentEditProps> { props ->
            span { +"Enter new student name:" }
            br {  }
            span {
                input() {
                    attrs.id = "firstname"
                    attrs.placeholder = "firstname"
                }
                input() {
                    attrs.id = "surname"
                    attrs.placeholder = "surname"
                }
                button {
                    +"add student"
                    attrs.onClickFunction = {
                        val firstname = document
                            .getElementById("firstname")
                                as HTMLInputElement
                        val surname = document
                            .getElementById("surname")
                                as HTMLInputElement
                        props.onClick(Student(firstname.value, surname.value))
                    }
                }
            }
        }

    fun RBuilder.addStudent(
        onClick: (Student) -> Unit
    ) = child(fAddstudent) {
        attrs.onClick = onClick
    }

Как видно из написанного кода, компонент добавляет строку и кнопку рядом со строкой, при нажатии кнопки компонент берет текст из строки и формирует его в данные типа "student" возвращая результат функции "onClick".

Весь исходный код в папке scr/main/kotlin/component
