# lab 8
Задание:\
Разработайте компоненты, отвечающие за редактирование названия занятия и имени и фамилии студента. Разработайте компонент, отвечающий за редактирование списка элементов (с возможностью добавить или удалить элемент). В качестве аргументов этому компоненту передаются компоненты для отображения и для редактирования элемента списка. Добавьте в приложение страницы для редактирования списка студентов и списка занятий.\ 

В компонент  "anyList" внесены изменения в соответствии с заданием, компонент сформирован в список с возможностью добавлять новые элементы, студента или занятие, в зависимости от переданного массива.\
Приложение после загрузки и после клика по "Lessons":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/onLoad.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/anyList.PNG)

Содержимое компонента "anyList" представлено ниже:

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

Функция вызова компонента имеет параметры:\
"objs", который является массивом передаваемых данных таких как "students" или "lessons",\
"add", функция добавляющая новый элеменнный в конкретный массив,\
 и "remove", функция убирающая конкретный элемент из массива.\ 
Изменение элемента массива происходит с помощью открытия соответствущей ссылки на редактируемый элемент массива, напротив элемента в списке, "Edit".\
Соответсвенно изминениям в "anyList" переработан компонент "App", "lessons" и "students" перенесены в сосояния:\

	interface AppState : RState {
	    var lessons: Array<Lesson>
	    var students: Array<Student>
	    var presents: Array<Array<Boolean>>
	}

Для отображения списков внутри приложения они иницированы в состояния следующим образом:\

	    override fun componentWillMount() {
	        state.students= studentList()
	        state.lessons= lessonsList()
	        state.presents = Array(state.lessons.size) {
	            Array(state.students.size) { false }
	        }
	    }

Соответственно функция "app()" больше не нужндается в аргументах и они были убраны из функции "main()":

	fun main() {
	    render(document.getElementById("root")!!) {
	        hashRouter {
	            app()
	        }
	    }
	}

Изменен вызов функции "anyList" внутри переключателей "/lessons" и "/students":\

	            route("/lessons",
	                exact = true,
	                render = {
	                    anyList(
	                        state.lessons,
	                        "Lessons",
	                        "/lessons",
	                        addLesson(),
	                        removeLesson())
	                }
	            )
	            route("/students",
	                exact = true,
	                render = {
	                    anyList(
	                        state.students,
	                        "Students",
	                        "/students",
	                        addStudent(),
	                        removeStudent())
	                }

Добавлены функции обработчики:\
"addLesson()" и "addStudent()", которые похожи по функционалу, они добавляют в массивы "lessons" и массив "students" новые элементы\

	    fun addLesson():(Event) -> Unit = {
	        setState {
	            lessons += Lesson("new lesson")
	            presents += arrayOf(Array(state.students.size){false})
	        }
	    }
	    fun addStudent():(Event)->Unit={
	        setState{
	            students+=Student("New","Student")
	        }
	    }

Пример использования функции "addLesson" после нажатия по строке "Add":\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/addLesson.PNG)

Как видно по скриншоту, добавилось новое занятие"new lesson", ссылка кликабельна:\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/newLesson.PNG)

Элементы внутри списка попрежнему активны, клик по студентам "Sheldon Cooper" и "Howard Wolowitz" изменяет стиль строки\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/newLessonClicked.PNG)

Вернувшись назад к занятиям можно менять название зания или удалять его из списка, кликнув по "Edit" напротив "Practice" открывается отдельный компонент с редактированием элемента списка:\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/practiceEdit.PNG)

Как видно из скриншота страка сразу заполнилась редактируемым элементом Изменим занятие на "Functional programming" и нажмем кнопку "Save":\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/functionalProgramming.PNG)

Элемент "Practice" был изменен на "Functional programming". Удалим элемент "Lecture" нажатием по "Delete" напротив этого элемента:\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/deleteLecture.PNG)

Аналогичные действия могут быть совершены над списком студентов:\

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/newStudent.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/leonardEdit.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/deleteSheldon.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab8/screenshots/KarstenClicked.PNG)

Отдельный компонент с редактирование реализован с помощью переключателя "/lessons/:number/edit" или "/students/:number/edit" в случаями со студентами:\

	            route(
	                "/lessons/:number/edit",
	                render = { route_props: RouteResultProps<RouteNumberResult> ->
	                    val num = route_props.num()
	                    val lesson = state.lessons[num]
	                    lessonEdit(
	                        num,
	                        lesson,
	                        editLesson(),
	                        removeLesson()
	                        )
	                }
	            )
	            route(
	                "/students/:number/edit",
	                render = { route_props: RouteResultProps<RouteNumberResult> ->
	                    val num = route_props.num()
	                    val students = state.students[num]
	                    studentEdit(
	                        num,
	                        students,
	                        editStudent(),
	                        removeStudent()
	                    )
	                }
	            )

Каждый переключатель вызывает соответствующую ему функцию "editLesson" или "editStudent", содержимое этих функций находится внутри компонентов "lesson" и компонента "student", имеет следущее содержание:\

	interface LessonEditProps : RProps {
	    var index:Int
	    var lesson: Lesson
	    var onClick: (Lesson)->Unit
	    var remove: (Int) -> Unit
	}
	
	val flessonEdit=
	    functionalComponent<LessonEditProps> { props ->
	        span {
	            input() {
	                attrs.id = "lessonEdit${props.index}"
	                attrs.defaultValue = props.lesson.name
	            }
	            button {
	                +"Save"
	                attrs.onClickFunction = {
	                    val inputElement = document
	                        .getElementById("lessonEdit${props.index}")
	                            as HTMLInputElement
	                    props.remove(props.index)
	                    props.onClick(Lesson(inputElement.value))
	                    window.history.back()
	                }
	            }
	        }
	    }
	
	fun RBuilder.lessonEdit(
	     index:Int,
	     lesson: Lesson,
	     onClick: (Lesson)->Unit,
	     remove: (Int) -> Unit
	) = child(flessonEdit){
	        attrs.index=index
	        attrs.lesson=lesson
	        attrs.onClick=onClick
	        attrs.remove=remove
	}

Функция "lessonEdit" отрисовывает строку, заполняя её содержимым выбранного из редактируемого списка элемента, пользователь заполняет строку и нажимает кнопку "Save",
после чего выбранный элемент удаляется и его местно занимает новый, заполненный пользователем. Аналогично написала функция "studentEdit":\

	interface studentEditProps : RProps {
	    var index:Int
	    var student: Student
	    var onClick: (Student)->Unit
	    var remove: (Int) -> Unit
	}
	
	val fstudentEdit=
	    functionalComponent<studentEditProps> { props ->
	        span {
	            input() {
	                attrs.id = "studentFirstnaneEdit${props.index}"
	                attrs.defaultValue = props.student.firstname
	            }
	            input() {
	                attrs.id = "studentSurnameEdit${props.index}"
	                attrs.defaultValue = props.student.surname
	            }
	            button {
	                +"Save"
	                attrs.onClickFunction = {
	                    val firstname = document
	                        .getElementById("studentFirstnaneEdit${props.index}")
	                            as HTMLInputElement
	                    val surname = document
	                        .getElementById("studentSurnameEdit${props.index}")
	                            as HTMLInputElement
	                    props.remove(props.index)
	                    props.onClick(Student(firstname.value, surname.value))
	                    window.history.back()
	                }
	            }
	        }
	    }
	
	fun RBuilder.studentEdit(
	     index:Int,
	     student: Student,
	     onClick: (Student)->Unit,
	     remove: (Int) -> Unit
	) = child(fstudentEdit){
	    attrs.index=index
	    attrs.student=student
	    attrs.onClick=onClick
	    attrs.remove=remove
	}

Функции обработчики событий написаны аналогично функциям "addLesson" и "addStudent", обрабатывая получанный тип данных, в случае с удалением это Int, а в случае с изминением это созданный ранее тип данных "Lesson" или "Student":\

	    fun removeLesson():(Int) -> Unit = {Int ->
	        setState{
	            lessons=state.lessons.copyOfRange(0,Int)+
	                    state.lessons.copyOfRange(Int+1,state.lessons.size)
	            presents=state.presents.copyOfRange(0,Int)+
	                    state.presents.copyOfRange(Int+1,state.presents.size)
	        }
	    }
	    fun removeStudent():(Int) -> Unit = {Int ->
	        setState{
	            students=state.students.copyOfRange(0,Int)+
	                    state.students.copyOfRange(Int+1,state.students.size)
	        }
	    }
	    fun editLesson():(Lesson) -> Unit={Lesson->
	        setState{
	            lessons+= Lesson
	            presents+= arrayOf(Array(state.students.size){false})
	        }
	    }
	    fun editStudent():(Student) -> Unit={Student->
	        setState{
	            students+= Student
	        }
	    }
	  

Исходный код находится в папке src/main/kotlin/component.
