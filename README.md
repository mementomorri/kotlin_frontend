# lab 10
Задание:\
Доработайте приложение, добавив в списки фильтры, которые выводят либо всех студентов (уроки), либо только присутствующих, либо только отсутствующих.

Нагладно разберем как изменилось приложение, а затем перейдем к изминениям в коде. Вид приложения при загрузке остался не изменным, изменилась лишь часть с конкретным студентом или предметом, соответственно имеет смысл продемонстрировать именно эту часть приложения. Так выглядит приложение после клика по "Lessons", а затем по "Lecture":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/onLoad.PNG)

Кликнем по первым двум студентам:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/onClick.PNG)

И для наглядности нажмем на "Absent":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/lectureAbsent.PNG)

Затем по "Present":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/lecturePresent.PNG)

Кликнем по "Students", а затем выберем "Sheldon Cooper", откроем все его предметы:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/sheldonAll.PNG)

Кликнем по "Absent":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/sheldonAbsent.PNG)

Затем по "Present":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab10/screenshots/sheldonPresent.PNG)

Разберем изминения в коде. Видимые кнопки формируются с помощью функции footer() помещенной после маркиорованного списка, в нижней части приложения, потому она и называется footer, вызов функции расположен после маркировано списка в anyFull.kt. Содержание функции, находящейся в файле footer.kt, идентично тому, которое представлено в проекте примере lawik123/kotlin-poc-frontend-react-redux:

    fun RBuilder.footer() =
        div {
            span { +"Presence filter: " }
            filterLink {
                attrs.filter = VisibilityFilter.SHOW_ALL
                +"All"
            }
            filterLink {
                attrs.filter = VisibilityFilter.SHOW_ABSENT
                +"Absent"
            }
            filterLink {
                attrs.filter = VisibilityFilter.SHOW_PRESENT
                +"Present"
            }
        }

Вид кнопок формируется из класса в файле link.kt, также идентично проекту примеру, изменены лишь визуальные составляющие, чтобы сделать их более уместными на фоне всего проекта:

      interface LinkProps : RProps {
          var onClick: () -> Unit
      }

      class Link(props: LinkProps) : RComponent<LinkProps, RState>(props) {
          override fun RBuilder.render() {
              span("fakeLink") {
                  attrs.onClickFunction = {
                      props.onClick()
                  }
                  children()
              }
          }
      }

filterLink, исользованнный в функции footer(), приведен в filterLinkContainer.kt и имеет следующее содержание:

    interface FilterLinkProps : RProps {
        var filter: VisibilityFilter
    }

    private interface LinkStateProps : RProps {
        var active: Boolean
    }

    private interface LinkDispatchProps : RProps {
        var onClick: () -> Unit
    }

    val filterLink: RClass<FilterLinkProps> =
        rConnect<State, SetVisibilityFilter, WrapperAction, FilterLinkProps, LinkStateProps, LinkDispatchProps, LinkProps>(
            { state, ownProps ->
                active = state.visibilityFilter == ownProps.filter
            },
            { dispatch, ownProps ->
                onClick = { dispatch(SetVisibilityFilter(ownProps.filter)) }
            }
        )(Link::class.js.unsafeCast<RClass<LinkProps>>())
  
Изминения в anyFullContainer.kt затрагивают lessonFullContainer и studentFullContainer добавляя в них функции, которые формируют новые subobjs для корректного отображения изминений, теперь этим занимается функция getVisible, формируя которую я брал пример с getVisibleTodos в проекте примере:

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
  
State.kt изменен в соответствии с появлением нового состояния приложения, код идентичен коду в проекте примере, он лишь немного изменен, чтобы быть более уместен в данном проекте:
  
    typealias LessonState = Map<Int, Lesson>

    typealias StudentState = Map<Int, Student>

    typealias Presents = Map<Int, Map<Int, Boolean>>

    typealias Visibility = VisibilityFilter

    class State(
        val lessons: LessonState,
        val students: StudentState,
        val presents: Presents,
        val visibilityFilter: Visibility
    )

    fun <T> Map<Int, T>.newId() =
        (this.maxBy { it.key }?.key ?: 0) + 1

    fun State.presentsStudent(idStudent: Int) =
        presents.map {
            it.key to (it.value[idStudent] ?: false)
        }.toMap()


    fun initialState() =
        State(
            lessonsList().mapIndexed { index, lesson ->
                index to lesson
            }.toMap(),
            studentList().mapIndexed { index, student ->
                index to student
            }.toMap(),
            lessonsList().mapIndexed { idLesson, _ ->
                idLesson to studentList().mapIndexed { idStudent, _ ->
                    idStudent to false
                }.toMap()
            }.toMap(),
            VisibilityFilter.SHOW_ALL
        )
        
Добавлен редюсер, в reducers.kt, идентичный представленному в проекте примере:

    fun visibilityFilterReducer(
        state: VisibilityFilter=VisibilityFilter.SHOW_ALL,
        action: RAction
    ):VisibilityFilter  = when (action) {
            is SetVisibilityFilter -> action.filter
            else -> state
        }

И строка класса в actions.kt:

    class SetVisibilityFilter(val filter: VisibilityFilter) : RAction

Исходный код находится в папке src/main/kotlin/.
