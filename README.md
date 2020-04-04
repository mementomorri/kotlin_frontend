# lab 7
Задание: Доработайте приложение, добавив компонент, разработанный в последнем задании прошлого урока на отдельную страницу приложения и
прописав маршруты к нему.

Компонент "AddLesson" остается без изменений, но в компонент "App" внесены следующие изменения:\
Для вынесения компонента "AddLesson" на отдельную страницу "/addLesson" добавлен отдельный к элементу в "header":

    override fun RBuilder.render() {
            header {
                h1 { +"App" }
                nav {
                    ul {
                        li { navLink("/lessons") { +"Lessons" } }
                        li { navLink("/students") { +"Students" } }
                        li {navLink("/addLesson"){+"Add new lesson"} }
                    }
                }
            }
            
В "switch" добавлен путь переключателя "/addLesson" с его свойствами и отображаемым элементом, 
который добавляет вызов функции "addLesson" созданной раннее:

    switch{
            route("/addLesson",
            exact = true,
            render = {
                addLesson(handleEvent())
            }
        )
    }
    
После загрузки страница с приложением выглядит так:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab7/screenshots/onLoad.PNG)

После клика по "Add new lesson" и добавления нового занятия "Self education":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab7/screenshots/newLesson.PNG)

Как изменения отобразились на массиве "Lessons:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab7/screenshots/lessons.PNG)

Клик по ссылке на "Self education"(/lesons/3) и клик по студенту "Howard Wolowitz":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab7/screenshots/selfEducation.PNG)

Функции "handleEvent" и "addLesson" остались без изменений. Исходный код находится в папке src/main/kotlin/component.
