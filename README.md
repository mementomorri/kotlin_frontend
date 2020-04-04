# lab 5
Задание:\
    — Реализовать компонент "Занятие", отображающий название занятия и список студентов;\
    — Поднять состояние компонента RStudentList  в созданный компонент;\
    — RStudentList преобразовать в функционнальный компонент.

Основной код для реализации названия занятия как компонента на основе класса RStudentClasses и последовательного написания соответствующей функции RClasses, добавлен в файл RClasses.kt:

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

Решение использует интерфейсы RClasses и RStudentListState:
    
    interface RClasses : RProps {
        var nameOfClass: Array<nameOfClass>
        var listStudent :Array<Student>
    }

    interface RStudentListState :RState{
        var present: Array<Boolean>
    }

Изменения в файле main.kt затрагивают лишь вызов функции:

    render(document.getElementById("root")!!) {
            h1 {
                +"Students"
            }
            RClasses( studentList.toTypedArray(), ListOfClasses)
        }

Состояние компонента RStudentList поднято в RClasses и преобразовано в функциональный:

    fun RBuilder.RFStudentList(students: Array<Student>,state : Array<Boolean>, onClick: (Int) -> (Event)->Unit) =
        child(functionalComponent<RStudentListProps> {props ->
            props.students.mapIndexed {index, student ->
                li {
                    rstudent(student, state[index],onClick(index))
                }
            }
        }){
            attrs.students = students
        }

После загруски страница выглядит так:

![](https://github.com/mementomorri/KotlinReact/blob/lab5/screenshots/load.PNG)

После смены занятия:

![](https://github.com/mementomorri/KotlinReact/blob/lab5/screenshots/change_class.PNG)

После клика по студентам:

![](https://github.com/mementomorri/KotlinReact/blob/lab5/screenshots/click_on_student.PNG)
