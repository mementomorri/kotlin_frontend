# lab 5
Задание:\
    — Реализовать компонент "Занятие", отображающий название занятия и список студентов;\
    — Поднять состояние компонента RStudentList  в созданный компонент;\
    — RStudentList преобразовать в функционнальный компонент.

Основной код для реализации названия занятия как компонента на основе класса RLesson и последовательного написания соответствующей функции Lesson, добавлен в файл RLesson.kt:

    class RLesson : RComponent<RLessonProps, RStudentListState>(){
        override fun componentWillMount() {
            state.apply {
                present = Array(props.students.size){false}
            }
        }
        override fun RBuilder.render() {
            h2 { +props.lesson }
            fstudentList(props.students,state.present, onIndex())

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
    fun RBuilder.Lesson(
        students: Array<Student>,
        lesson:String
    ) = child(RLesson::class){
            attrs.students = students
            attrs.lesson=lesson
        }

Решение использует интерфейсы RLessonProps и RStudentListState:
    
    interface RLessonProps : RProps {
        var students :Array<Student>
        var lesson : String
    }

    interface RStudentListState :RState{
        var present: Array<Boolean>
    }


Изменения в файле main.kt затрагивают лишь вызов функции:

    render(document.getElementById("root")!!) {
            h1 {
                +"Students"
            }
            Lesson( studentList.toTypedArray(), "Math")
        }
Где строка "Math" название необходимого предмета.\
Состояние компонента RStudentList поднято в RLesson и преобразовано в функциональный:

    val studentList =
        functionalComponent<RStudentListProps>{
            ul {
                it.students.mapIndexed { index, student ->
                    li {
                        rstudent(student, it.present[index], it.onClick(index))
                    }
                }
            }
        }

    fun RBuilder.fstudentList(
        students: Array<Student>,
        present: Array<Boolean>,
        onClick: (Int) -> (Event)->Unit
    ) =child(studentList){
        attrs.students=students
        attrs.present=present
        attrs.onClick=onClick
    }

После загруски страница выглядит так:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab5/screenshots/load.PNG)

После клика по студентам:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab5/screenshots/click_on_student.PNG)
