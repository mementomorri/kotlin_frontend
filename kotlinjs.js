(function (_, Kotlin, $module$kotlin_react_dom, $module$kotlinx_html_js, $module$kotlin_react_router_dom, $module$kotlin_react, $module$kotlin_react_redux, $module$kotlin_redux, $module$redux) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var navLink = $module$kotlin_react_router_dom.react.router.dom.navLink_bcialx$;
  var functionalComponent = $module$kotlin_react.react.functionalComponent_1klik0$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var TD_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var TABLE_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var route = $module$kotlin_react_router_dom.react.router.dom.route_9tkfd6$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var route_0 = $module$kotlin_react_router_dom.react.router.dom.route_oxctnt$;
  var switch_0 = $module$kotlin_react_router_dom.react.router.dom.switch_jg12zk$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var LI_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var UL_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var NAV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
  var HEADER_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var child = $module$kotlin_react.react.child_9r8yuv$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_defaultValue = $module$kotlin_react_dom.react.dom.set_defaultValue_q3v29f$;
  var throwCCE = Kotlin.throwCCE;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var BR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var LABEL_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var FORM_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
  var Pair = Kotlin.kotlin.Pair;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var rConnect = $module$kotlin_react_redux.react.redux.rConnect_aavpjk$;
  var getCallableRef = Kotlin.getCallableRef;
  var invoke = $module$kotlin_react.react.invoke_adv8my$;
  var rConnect_0 = $module$kotlin_react_redux.react.redux.rConnect_hfg8n2$;
  var rConnect_1 = $module$kotlin_react_redux.react.redux.rConnect_yelmmk$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var rEnhancer = $module$kotlin_redux.redux.rEnhancer_287e2$;
  var compose = $module$redux.compose;
  var createStore = $module$redux.createStore;
  var hashRouter = $module$kotlin_react_router_dom.react.router.dom.hashRouter_jg12zk$;
  var provider = $module$kotlin_react_redux.react.redux.provider_6c40e8$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var RAction = $module$kotlin_redux.redux.RAction;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var minus = Kotlin.kotlin.collections.minus_4pa84t$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function table$lambda(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AnyListProps() {
  }
  AnyListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListProps',
    interfaces: []
  };
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda(closure$rObj, closure$obj) {
    return function ($receiver) {
      closure$rObj($receiver, closure$obj.value, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props, closure$obj) {
    return function (it) {
      closure$props.remove(closure$obj.key);
      return Unit;
    };
  }
  function fAnyList$lambda(closure$name, closure$path, closure$rObj) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(closure$name);
      $receiver.child_2usv9w$($receiver_0.create());
      var $receiver_0_0 = new RDOMBuilder_init(span$lambda('fakeLink'));
      $receiver_0_0.unaryPlus_pdl1vz$('Add');
      set_onClickFunction($receiver_0_0.attrs, props.add);
      $receiver.child_2usv9w$($receiver_0_0.create());
      var $receiver_0_1 = new RDOMBuilder_init(table$lambda(null));
      var closure$path_0 = closure$path;
      var closure$rObj_0 = closure$rObj;
      var $receiver_1 = props.objs;
      var destination = ArrayList_init($receiver_1.size);
      var tmp$;
      tmp$ = $receiver_1.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var $receiver_0_2 = new RDOMBuilder_init(tr$lambda(null));
        var $receiver_0_3 = new RDOMBuilder_init(td$lambda(null));
        navLink($receiver_0_3, closure$path_0 + '/' + item.key, void 0, void 0, void 0, void 0, void 0, void 0, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda(closure$rObj_0, item));
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
        var $receiver_0_4 = new RDOMBuilder_init(td$lambda(null));
        var $receiver_0_5 = new RDOMBuilder_init(span$lambda('fakeLink'));
        $receiver_0_5.unaryPlus_pdl1vz$('Delete');
        set_onClickFunction($receiver_0_5.attrs, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(props, item));
        $receiver_0_4.child_2usv9w$($receiver_0_5.create());
        $receiver_0_2.child_2usv9w$($receiver_0_4.create());
        tmp$_0.call(destination, $receiver_0_1.child_2usv9w$($receiver_0_2.create()));
      }
      $receiver.child_2usv9w$($receiver_0_1.create());
      return Unit;
    };
  }
  function fAnyList(name, path, rObj) {
    return functionalComponent(fAnyList$lambda(name, path, rObj));
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function nav$lambda(closure$classes) {
    return function (it) {
      return new NAV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function header$lambda(closure$classes) {
    return function (it) {
      return new HEADER_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AppProps() {
  }
  AppProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AppProps',
    interfaces: []
  };
  function RouteNumberResult() {
  }
  RouteNumberResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RouteNumberResult',
    interfaces: []
  };
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Multiple choice questions');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('True/False questions');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda(this$) {
    return function () {
      return this$.invoke_eb8iu4$(multipleChoiceListContainer, fApp$lambda$lambda$lambda$lambda);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_0(this$) {
    return function () {
      return this$.invoke_eb8iu4$(trueFalseListContainer, fApp$lambda$lambda$lambda$lambda_0);
    };
  }
  function fApp$lambda$lambda$lambda_1(closure$props) {
    return function (it) {
      return closure$props.multipleChoiceQuestions.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_1(closure$index, closure$MCQuestion) {
    return function ($receiver) {
      $receiver.attrs.keyQuestionPair = to(closure$index, closure$MCQuestion);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_2(this$) {
    return function (index, MCQuestion) {
      return this$.invoke_eb8iu4$(multipleChoiceFullContainer, fApp$lambda$lambda$lambda$lambda_1(index, MCQuestion));
    };
  }
  function fApp$lambda$lambda$lambda_3(closure$props) {
    return function (it) {
      return closure$props.trueFalseQuestions.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_2(closure$index, closure$TFQuestion) {
    return function ($receiver) {
      $receiver.attrs.keyQuestionPair = to(closure$index, closure$TFQuestion);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_4(this$) {
    return function (index, TFQuestion) {
      return this$.invoke_eb8iu4$(trueFalseFullContainer, fApp$lambda$lambda$lambda$lambda_2(index, TFQuestion));
    };
  }
  function fApp$lambda$lambda$lambda_5(closure$props) {
    return function (it) {
      return closure$props.multipleChoiceQuestions.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_3(closure$index, closure$MCQuestion) {
    return function ($receiver) {
      $receiver.attrs.MultipleChoice = to(closure$index, closure$MCQuestion);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_6(this$) {
    return function (index, MCQuestion) {
      return this$.invoke_eb8iu4$(multipleChoiceEditContainer, fApp$lambda$lambda$lambda$lambda_3(index, MCQuestion));
    };
  }
  function fApp$lambda$lambda$lambda_7(closure$props) {
    return function (it) {
      return closure$props.trueFalseQuestions.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_4(closure$index, closure$TFQuestion) {
    return function ($receiver) {
      $receiver.attrs.TrueFalse = to(closure$index, closure$TFQuestion);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_8(this$) {
    return function (index, TFQuestion) {
      return this$.invoke_eb8iu4$(trueFalseEditContainer, fApp$lambda$lambda$lambda$lambda_4(index, TFQuestion));
    };
  }
  function fApp$lambda$lambda(closure$props) {
    return function ($receiver) {
      route($receiver, '/MCQuestions', true, void 0, fApp$lambda$lambda$lambda($receiver));
      route($receiver, '/TFQuestions', true, void 0, fApp$lambda$lambda$lambda_0($receiver));
      route_0($receiver, '/MCQuestions/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_1(closure$props), fApp$lambda$lambda$lambda_2($receiver)));
      route_0($receiver, '/TFQuestions/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_3(closure$props), fApp$lambda$lambda$lambda_4($receiver)));
      route_0($receiver, '/MCQuestions/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_5(closure$props), fApp$lambda$lambda$lambda_6($receiver)));
      route_0($receiver, '/TFQuestions/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_7(closure$props), fApp$lambda$lambda$lambda_8($receiver)));
      return Unit;
    };
  }
  function fApp$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(header$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Moodle questions editing');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(nav$lambda(null));
    var $receiver_0_2 = new RDOMBuilder_init(ul$lambda(null));
    var $receiver_0_3 = new RDOMBuilder_init(li$lambda(null));
    navLink($receiver_0_3, '/MCQuestions', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_4 = new RDOMBuilder_init(li$lambda(null));
    navLink($receiver_0_4, '/TFQuestions', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_2.child_2usv9w$($receiver_0_4.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    switch_0($receiver, fApp$lambda$lambda(props));
    return Unit;
  }
  function fApp() {
    return functionalComponent(fApp$lambda);
  }
  function renderObject$lambda(closure$selector, closure$rElement, this$renderObject) {
    return function (route_props) {
      var tmp$;
      var num = (tmp$ = toIntOrNull(route_props.match.params.number)) != null ? tmp$ : -1;
      var obj = closure$selector(num);
      var tmp$_0;
      if (obj != null)
        tmp$_0 = closure$rElement(num, obj);
      else {
        var $receiver = this$renderObject;
        var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0.unaryPlus_pdl1vz$('Object not found');
        tmp$_0 = $receiver.child_2usv9w$($receiver_0.create());
      }
      return tmp$_0;
    };
  }
  function renderObject($receiver, selector, rElement) {
    return renderObject$lambda(selector, rElement, $receiver);
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function td$lambda_0(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function tr$lambda_0(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_0(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function br$lambda(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function table$lambda_0(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function MultipleChoiceProps() {
  }
  MultipleChoiceProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleChoiceProps',
    interfaces: []
  };
  function fMultipleChoiceQuestion$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$(it.MultipleChoice.name);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fMultipleChoiceQuestion;
  function multipleChoiceQuestion$lambda(closure$MultipleChoice, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.MultipleChoice = closure$MultipleChoice;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function multipleChoiceQuestion($receiver, MultipleChoice, onClick) {
    return child($receiver, fMultipleChoiceQuestion, void 0, multipleChoiceQuestion$lambda(MultipleChoice, onClick));
  }
  function MCQuestionEditProps() {
  }
  MCQuestionEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCQuestionEditProps',
    interfaces: []
  };
  function fMCQuestionEdit$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var questionItseft = Kotlin.isType(tmp$ = document.getElementById('name' + closure$props.MultipleChoice.first), HTMLInputElement) ? tmp$ : throwCCE();
      var arrayOfEditedAnswers = ArrayList_init_0();
      var arrayOfUneditedAnswers = closure$props.MultipleChoice.second.arrayOfAnswers;
      for (tmp$_0 = 0; tmp$_0 !== arrayOfUneditedAnswers.length; ++tmp$_0) {
        var a = arrayOfUneditedAnswers[tmp$_0];
        var editedAnswer = Kotlin.isType(tmp$_1 = document.getElementById('answerEdit' + a.possibleAnswer), HTMLInputElement) ? tmp$_1 : throwCCE();
        var editedFractionPoint = Kotlin.isType(tmp$_2 = document.getElementById('fractionEdit' + a.possibleAnswer), HTMLInputElement) ? tmp$_2 : throwCCE();
        arrayOfEditedAnswers.add_11rb$(new Answer(editedAnswer.value, toDouble(editedFractionPoint.value)));
      }
      closure$props.onClick(new MultipleChoice(questionItseft.value, copyToArray(arrayOfEditedAnswers)));
      window.history.back();
      return Unit;
    };
  }
  function fMCQuestionEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(p$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$('Edit multiple choice question:');
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    $receiver_0_0.attrs.size = '50';
    set_id($receiver_0_0.attrs, 'name' + props.MultipleChoice.first);
    set_defaultValue($receiver_0_0.attrs, props.MultipleChoice.second.name);
    $receiver.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(br$lambda(null));
    $receiver.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda_0(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Edit answers and their fraction points:');
    $receiver.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_3 = new RDOMBuilder_init(table$lambda_0(null));
    var $receiver_0_4 = new RDOMBuilder_init(tr$lambda_0(null));
    var $receiver_0_5 = new RDOMBuilder_init(td$lambda_0(null));
    $receiver_0_5.unaryPlus_pdl1vz$('Answers:');
    $receiver_0_4.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_6 = new RDOMBuilder_init(td$lambda_0(null));
    $receiver_0_6.unaryPlus_pdl1vz$('Fraction points:');
    $receiver_0_4.child_2usv9w$($receiver_0_6.create());
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    var $receiver_1 = props.MultipleChoice.second.arrayOfAnswers;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
      var element = $receiver_1[tmp$];
      var $receiver_0_7 = new RDOMBuilder_init(tr$lambda_0(null));
      var $receiver_0_8 = new RDOMBuilder_init(td$lambda_0(null));
      var $receiver_0_9 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
      $receiver_0_9.attrs.size = '3';
      set_id($receiver_0_9.attrs, 'answerEdit' + element.possibleAnswer);
      set_defaultValue($receiver_0_9.attrs, element.possibleAnswer);
      $receiver_0_8.child_2usv9w$($receiver_0_9.create());
      $receiver_0_7.child_2usv9w$($receiver_0_8.create());
      var $receiver_0_10 = new RDOMBuilder_init(td$lambda_0(null));
      var $receiver_0_11 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
      $receiver_0_11.attrs.size = '1';
      set_id($receiver_0_11.attrs, 'fractionEdit' + element.possibleAnswer);
      set_defaultValue($receiver_0_11.attrs, element.fractionOfAnswer.toString());
      $receiver_0_10.child_2usv9w$($receiver_0_11.create());
      $receiver_0_7.child_2usv9w$($receiver_0_10.create());
      $receiver_0_3.child_2usv9w$($receiver_0_7.create());
    }
    $receiver.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_12 = new RDOMBuilder_init(button$lambda(null, null, null, null));
    $receiver_0_12.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_12.attrs, fMCQuestionEdit$lambda$lambda$lambda(props));
    $receiver.child_2usv9w$($receiver_0_12.create());
    return Unit;
  }
  var fMCQuestionEdit;
  function input$lambda_0(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function label$lambda(closure$classes) {
    return function (it) {
      return new LABEL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function td$lambda_1(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function tr$lambda_1(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function table$lambda_1(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function span$lambda_1(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_1(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
    return function (it) {
      return new FORM_init(attributesMapOf_0(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
    };
  }
  function MultipleChoiceFullProps() {
  }
  MultipleChoiceFullProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleChoiceFullProps',
    interfaces: []
  };
  function fMultipleChoiceFull$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Edit question');
    return Unit;
  }
  function fMultipleChoiceFull$lambda(closure$path) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(props.keyQuestionPair.second.toString());
      $receiver.child_2usv9w$($receiver_0.create());
      var $receiver_0_0 = new RDOMBuilder_init(p$lambda_1(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Choose one or more answers:');
      $receiver.child_2usv9w$($receiver_0_0.create());
      var $receiver_0_1 = new RDOMBuilder_init(form$lambda(null, null, null, null));
      var closure$path_0 = closure$path;
      var $receiver_0_2 = new RDOMBuilder_init(table$lambda_1(null));
      var $receiver_1 = props.keyQuestionPair.second.arrayOfAnswers;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
        var element = $receiver_1[tmp$];
        var $receiver_0_3 = new RDOMBuilder_init(tr$lambda_1(null));
        var $receiver_0_4 = new RDOMBuilder_init(td$lambda_1(null));
        var $receiver_0_5 = new RDOMBuilder_init(input$lambda_0(InputType.checkBox, null, null, null, null));
        set_id($receiver_0_5.attrs, 'answer' + props.keyQuestionPair.first);
        $receiver_0_5.attrs.name = 'choice';
        $receiver_0_5.attrs.value = props.keyQuestionPair.first.toString();
        $receiver_0_4.child_2usv9w$($receiver_0_5.create());
        var $receiver_0_6 = new RDOMBuilder_init(label$lambda(null));
        $receiver_0_6.attrs.htmlFor = 'answer' + props.keyQuestionPair.first;
        $receiver_0_6.unaryPlus_pdl1vz$(element.toString() + ' (' + element.fractionOfAnswer + ' points)');
        $receiver_0_4.child_2usv9w$($receiver_0_6.create());
        $receiver_0_3.child_2usv9w$($receiver_0_4.create());
        var $receiver_0_7 = new RDOMBuilder_init(td$lambda_1(null));
        $receiver_0_3.child_2usv9w$($receiver_0_7.create());
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
      }
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      var $receiver_0_8 = new RDOMBuilder_init(span$lambda_1('Link'));
      navLink($receiver_0_8, closure$path_0 + '/' + props.keyQuestionPair.first + '/edit', void 0, void 0, void 0, void 0, void 0, void 0, fMultipleChoiceFull$lambda$lambda$lambda$lambda);
      $receiver_0_1.child_2usv9w$($receiver_0_8.create());
      $receiver.child_2usv9w$($receiver_0_1.create());
      return Unit;
    };
  }
  function fMultipleChoiceFull(path) {
    return functionalComponent(fMultipleChoiceFull$lambda(path));
  }
  function span$lambda_2(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_2(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_1(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function br$lambda_0(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function TrueFalseProps() {
  }
  TrueFalseProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TrueFalseProps',
    interfaces: []
  };
  function fTrueFalseQuestion$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_2(null));
    $receiver_0.unaryPlus_pdl1vz$(it.TrueFalse.name);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fTrueFalseQuestion;
  function trueFalseQuestion$lambda(closure$TrueFalse, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.TrueFalse = closure$TrueFalse;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function trueFalseQuestion($receiver, TrueFalse, onClick) {
    return child($receiver, fTrueFalseQuestion, void 0, trueFalseQuestion$lambda(TrueFalse, onClick));
  }
  function TrueFalseEditProps() {
  }
  TrueFalseEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TrueFalseEditProps',
    interfaces: []
  };
  function fTrueFalsetEdit$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var name = Kotlin.isType(tmp$ = document.getElementById('name' + closure$props.TrueFalse.first), HTMLInputElement) ? tmp$ : throwCCE();
      var answerChoice = Kotlin.isType(tmp$_0 = document.getElementById('correctAnswerIs'), HTMLInputElement) ? tmp$_0 : throwCCE();
      switch (answerChoice.value) {
        case 'True':
          tmp$_1 = 0;
          break;
        case 'true':
          tmp$_1 = 0;
          break;
        case 'False':
          tmp$_1 = 1;
          break;
        case 'false':
          tmp$_1 = 1;
          break;
        default:tmp$_1 = closure$props.TrueFalse.second.correctAnswer;
          break;
      }
      var calculatedAnswerNumber = tmp$_1;
      closure$props.onClick(new TrueFalse(name.value, new Pair('True', 'False'), calculatedAnswerNumber));
      window.history.back();
      return Unit;
    };
  }
  function fTrueFalsetEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(p$lambda_2(null));
    $receiver_0.unaryPlus_pdl1vz$('Edit true/talse question:');
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, null, null));
    $receiver_0_0.attrs.size = '50';
    set_id($receiver_0_0.attrs, 'name' + props.TrueFalse.first);
    set_defaultValue($receiver_0_0.attrs, props.TrueFalse.second.name);
    $receiver.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(br$lambda_0(null));
    $receiver.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda_2(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Choose correct answer:');
    $receiver.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_3 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, null, null));
    $receiver_0_3.attrs.size = '2';
    set_id($receiver_0_3.attrs, 'correctAnswerIs');
    set_defaultValue($receiver_0_3.attrs, props.TrueFalse.second.correctAnswer === 0 ? 'True' : 'False');
    $receiver.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_4 = new RDOMBuilder_init(br$lambda_0(null));
    $receiver.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(button$lambda_0(null, null, null, null));
    $receiver_0_5.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_5.attrs, fTrueFalsetEdit$lambda$lambda$lambda(props));
    $receiver.child_2usv9w$($receiver_0_5.create());
    return Unit;
  }
  var fTrueFalsetEdit;
  function p$lambda_3(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_2(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function label$lambda_0(closure$classes) {
    return function (it) {
      return new LABEL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function br$lambda_1(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function form$lambda_0(closure$action, closure$encType, closure$method, closure$classes) {
    return function (it) {
      return new FORM_init(attributesMapOf_0(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
    };
  }
  function span$lambda_3(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function TrueFalseFullProps() {
  }
  TrueFalseFullProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TrueFalseFullProps',
    interfaces: []
  };
  function fTrueFalseFull$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Edit question');
    return Unit;
  }
  function fTrueFalseFull$lambda(closure$path) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h3$lambda_0(null));
      $receiver_0.unaryPlus_pdl1vz$(props.keyQuestionPair.second.toString());
      $receiver.child_2usv9w$($receiver_0.create());
      var $receiver_0_0 = new RDOMBuilder_init(form$lambda_0(null, null, null, null));
      set_id($receiver_0_0.attrs, 'answerChoice');
      var $receiver_0_1 = new RDOMBuilder_init(div$lambda(null));
      var $receiver_0_2 = new RDOMBuilder_init(p$lambda_3(null));
      $receiver_0_2.unaryPlus_pdl1vz$('Is this statement true or false?');
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      var $receiver_0_3 = new RDOMBuilder_init(input$lambda_2(InputType.radio, null, null, null, null));
      $receiver_0_3.attrs.name = 'choice';
      $receiver_0_3.attrs.value = '0';
      set_id($receiver_0_3.attrs, 'statementIsTrue');
      $receiver_0_1.child_2usv9w$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(label$lambda_0(null));
      $receiver_0_4.attrs.htmlFor = 'statementIsTrue';
      if (props.keyQuestionPair.second.correctAnswer === 0)
        $receiver_0_4.unaryPlus_pdl1vz$('True (correct)');
      else
        $receiver_0_4.unaryPlus_pdl1vz$('True');
      $receiver_0_1.child_2usv9w$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(br$lambda_1(null));
      $receiver_0_1.child_2usv9w$($receiver_0_5.create());
      var $receiver_0_6 = new RDOMBuilder_init(input$lambda_2(InputType.radio, null, null, null, null));
      $receiver_0_6.attrs.name = 'choice';
      $receiver_0_6.attrs.value = '1';
      set_id($receiver_0_6.attrs, 'statementIsFalse');
      $receiver_0_1.child_2usv9w$($receiver_0_6.create());
      var $receiver_0_7 = new RDOMBuilder_init(label$lambda_0(null));
      $receiver_0_7.attrs.htmlFor = 'statementIsFalse';
      if (props.keyQuestionPair.second.correctAnswer === 1)
        $receiver_0_7.unaryPlus_pdl1vz$('False (correct)');
      else
        $receiver_0_7.unaryPlus_pdl1vz$('False');
      $receiver_0_1.child_2usv9w$($receiver_0_7.create());
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      $receiver.child_2usv9w$($receiver_0_0.create());
      var $receiver_0_8 = new RDOMBuilder_init(br$lambda_1(null));
      $receiver.child_2usv9w$($receiver_0_8.create());
      var $receiver_0_9 = new RDOMBuilder_init(span$lambda_3(null));
      navLink($receiver_0_9, closure$path + '/' + props.keyQuestionPair.first + '/edit', void 0, void 0, void 0, void 0, void 0, void 0, fTrueFalseFull$lambda$lambda$lambda);
      $receiver.child_2usv9w$($receiver_0_9.create());
      return Unit;
    };
  }
  function fTrueFalseFull(path) {
    return functionalComponent(fTrueFalseFull$lambda(path));
  }
  function AnyListDispatchProps() {
  }
  AnyListDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListDispatchProps',
    interfaces: []
  };
  function AnyListStateProps() {
  }
  AnyListStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListStateProps',
    interfaces: []
  };
  function trueFalseListHOC$lambda($receiver, state, f) {
    $receiver.objs = state.trueFalseQuestions;
    return Unit;
  }
  function trueFalseListHOC$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddTrueFalseQuestion(new TrueFalse('new true/false question', new Pair('True', 'False'), 0)));
      return Unit;
    };
  }
  function trueFalseListHOC$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new RemoveTrueFalseQuestion(it));
      return Unit;
    };
  }
  function trueFalseListHOC$lambda_0($receiver, dispatch, f) {
    $receiver.add = trueFalseListHOC$lambda$lambda(dispatch);
    $receiver.remove = trueFalseListHOC$lambda$lambda_0(dispatch);
    return Unit;
  }
  var trueFalseListHOC;
  var trueFalseListRClass;
  var trueFalseListContainer;
  function multipleChoiceListContainer$lambda($receiver, state, f) {
    $receiver.objs = state.multipleChoiceQuestions;
    return Unit;
  }
  function multipleChoiceListContainer$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddMultipleChoice(new MultipleChoice('new multiple choice question', [new Answer('new answer', 100.0), new Answer('new answer', 0.0), new Answer('new answer', 0.0)])));
      return Unit;
    };
  }
  function multipleChoiceListContainer$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new RemoveMultipleChoice(it));
      return Unit;
    };
  }
  function multipleChoiceListContainer$lambda_0($receiver, dispatch, f) {
    $receiver.add = multipleChoiceListContainer$lambda$lambda(dispatch);
    $receiver.remove = multipleChoiceListContainer$lambda$lambda_0(dispatch);
    return Unit;
  }
  var multipleChoiceListContainer;
  function appContainer$lambda($receiver, state, f) {
    $receiver.multipleChoiceQuestions = state.multipleChoiceQuestions;
    $receiver.trueFalseQuestions = state.trueFalseQuestions;
    return Unit;
  }
  function appContainer$lambda_0($receiver) {
    $receiver.pure = false;
    return Unit;
  }
  var appContainer;
  function MultipleChoiceEditOwnProps() {
  }
  MultipleChoiceEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleChoiceEditOwnProps',
    interfaces: []
  };
  function multipleChoiceEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangeMultipleChoice(closure$ownProps.MultipleChoice.first, it));
      return Unit;
    };
  }
  function multipleChoiceEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = multipleChoiceEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var multipleChoiceEditContainer;
  function TrueFalseEditOwnProps() {
  }
  TrueFalseEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TrueFalseEditOwnProps',
    interfaces: []
  };
  function trueFalseEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangeTrueFalseQuestion(closure$ownProps.TrueFalse.first, it));
      return Unit;
    };
  }
  function trueFalseEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = trueFalseEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var trueFalseEditContainer;
  function MultipleChoiceFullDispatchProps() {
  }
  MultipleChoiceFullDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleChoiceFullDispatchProps',
    interfaces: []
  };
  function MultipleChoiceFullStateProps() {
  }
  MultipleChoiceFullStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleChoiceFullStateProps',
    interfaces: []
  };
  function MultipleChoiceFullOwnProps() {
  }
  MultipleChoiceFullOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultipleChoiceFullOwnProps',
    interfaces: []
  };
  function multipleChoiceFullContainer$lambda($receiver, state, f) {
    $receiver.keyQuestionMap = state.multipleChoiceQuestions;
    return Unit;
  }
  function multipleChoiceFullContainer$lambda_0($receiver, f, f_0) {
    return Unit;
  }
  var multipleChoiceFullContainer;
  function TrueFalseFullStateProps() {
  }
  TrueFalseFullStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TrueFalseFullStateProps',
    interfaces: []
  };
  function TrueFalseFullOwnProps() {
  }
  TrueFalseFullOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TrueFalseFullOwnProps',
    interfaces: []
  };
  function trueFalseFullContainer$lambda($receiver, state, f) {
    $receiver.keyQuestionMap = state.trueFalseQuestions;
    return Unit;
  }
  function trueFalseFullContainer$lambda_0($receiver, f, f_0) {
    return Unit;
  }
  var trueFalseFullContainer;
  function Answer(possibleAnswer, fractionOfAnswer) {
    this.possibleAnswer = possibleAnswer;
    this.fractionOfAnswer = fractionOfAnswer;
  }
  Answer.prototype.toString = function () {
    return this.possibleAnswer;
  };
  Answer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Answer',
    interfaces: []
  };
  Answer.prototype.component1 = function () {
    return this.possibleAnswer;
  };
  Answer.prototype.component2 = function () {
    return this.fractionOfAnswer;
  };
  Answer.prototype.copy_io5o9c$ = function (possibleAnswer, fractionOfAnswer) {
    return new Answer(possibleAnswer === void 0 ? this.possibleAnswer : possibleAnswer, fractionOfAnswer === void 0 ? this.fractionOfAnswer : fractionOfAnswer);
  };
  Answer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.possibleAnswer) | 0;
    result = result * 31 + Kotlin.hashCode(this.fractionOfAnswer) | 0;
    return result;
  };
  Answer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.possibleAnswer, other.possibleAnswer) && Kotlin.equals(this.fractionOfAnswer, other.fractionOfAnswer)))));
  };
  function MultipleChoice(name, arrayOfAnswers) {
    this.name = name;
    this.arrayOfAnswers = arrayOfAnswers;
  }
  MultipleChoice.prototype.toString = function () {
    return this.name;
  };
  MultipleChoice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleChoice',
    interfaces: []
  };
  MultipleChoice.prototype.component1 = function () {
    return this.name;
  };
  MultipleChoice.prototype.component2 = function () {
    return this.arrayOfAnswers;
  };
  MultipleChoice.prototype.copy_qkq1gi$ = function (name, arrayOfAnswers) {
    return new MultipleChoice(name === void 0 ? this.name : name, arrayOfAnswers === void 0 ? this.arrayOfAnswers : arrayOfAnswers);
  };
  MultipleChoice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.arrayOfAnswers) | 0;
    return result;
  };
  MultipleChoice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.arrayOfAnswers, other.arrayOfAnswers)))));
  };
  function MCQuestionsList() {
    return [new MultipleChoice('How many planets are in our solar system?', [new Answer('8', 100.0), new Answer('7', 0.0), new Answer('9', 0.0)]), new MultipleChoice('Which planet is the most closed to the Sun?', [new Answer('Mercury', 100.0), new Answer('Venus', 0.0), new Answer('Earth', 0.0)])];
  }
  function State(multipleChoiceQuestions, trueFalseQuestions) {
    this.multipleChoiceQuestions = multipleChoiceQuestions;
    this.trueFalseQuestions = trueFalseQuestions;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function newId($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = $receiver.entries;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }var maxValue = maxElem.key;
      do {
        var e = iterator.next();
        var v = e.key;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }}
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return ((tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.key : null) != null ? tmp$_0 : 0) + 1 | 0;
  }
  function initialState() {
    var $receiver = MCQuestionsList();
    var destination = ArrayList_init($receiver.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    var tmp$_1 = toMap(destination);
    var $receiver_0 = TFQuestionsList();
    var destination_0 = ArrayList_init($receiver_0.length);
    var tmp$_2, tmp$_0_0;
    var index_0 = 0;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
      var item_0 = $receiver_0[tmp$_2];
      destination_0.add_11rb$(to((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0), item_0));
    }
    return new State(tmp$_1, toMap(destination_0));
  }
  function TrueFalse(name, answers, correctAnswer) {
    this.name = name;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  TrueFalse.prototype.toString = function () {
    return this.name;
  };
  TrueFalse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrueFalse',
    interfaces: []
  };
  TrueFalse.prototype.component1 = function () {
    return this.name;
  };
  TrueFalse.prototype.component2 = function () {
    return this.answers;
  };
  TrueFalse.prototype.component3 = function () {
    return this.correctAnswer;
  };
  TrueFalse.prototype.copy_b7td53$ = function (name, answers, correctAnswer) {
    return new TrueFalse(name === void 0 ? this.name : name, answers === void 0 ? this.answers : answers, correctAnswer === void 0 ? this.correctAnswer : correctAnswer);
  };
  TrueFalse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.answers) | 0;
    result = result * 31 + Kotlin.hashCode(this.correctAnswer) | 0;
    return result;
  };
  TrueFalse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.answers, other.answers) && Kotlin.equals(this.correctAnswer, other.correctAnswer)))));
  };
  function TFQuestionsList() {
    return [new TrueFalse('Sun is the most heavy component in our solar system.', new Pair('True', 'False'), 0), new TrueFalse('Neptune is the outermost planet in our solar system.', new Pair('True', 'False'), 0)];
  }
  var store;
  function main$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.invoke_eb8iu4$(appContainer, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    hashRouter($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda($receiver) {
    provider($receiver, store, main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function AddTrueFalseQuestion(TrueFalse) {
    this.TrueFalse = TrueFalse;
  }
  AddTrueFalseQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddTrueFalseQuestion',
    interfaces: [RAction]
  };
  function RemoveTrueFalseQuestion(id) {
    this.id = id;
  }
  RemoveTrueFalseQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveTrueFalseQuestion',
    interfaces: [RAction]
  };
  function ChangeTrueFalseQuestion(id, newTrueFalse) {
    this.id = id;
    this.newTrueFalse = newTrueFalse;
  }
  ChangeTrueFalseQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeTrueFalseQuestion',
    interfaces: [RAction]
  };
  function AddMultipleChoice(MultipleChoice) {
    this.MultipleChoice = MultipleChoice;
  }
  AddMultipleChoice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddMultipleChoice',
    interfaces: [RAction]
  };
  function RemoveMultipleChoice(id) {
    this.id = id;
  }
  RemoveMultipleChoice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveMultipleChoice',
    interfaces: [RAction]
  };
  function ChangeMultipleChoice(id, newMultipleChoice) {
    this.id = id;
    this.newMultipleChoice = newMultipleChoice;
  }
  ChangeMultipleChoice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeMultipleChoice',
    interfaces: [RAction]
  };
  function multipleChoiceReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddMultipleChoice))
      return plus(state, to(newId, action.MultipleChoice));
    else if (Kotlin.isType(action, RemoveMultipleChoice))
      return minus(state, action.id);
    else if (Kotlin.isType(action, ChangeMultipleChoice)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newMultipleChoice;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    } else
      return state;
  }
  function trueFalseReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddTrueFalseQuestion))
      return plus(state, to(newId, action.TrueFalse));
    else if (Kotlin.isType(action, RemoveTrueFalseQuestion))
      return minus(state, action.id);
    else if (Kotlin.isType(action, ChangeTrueFalseQuestion)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newTrueFalse;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    } else
      return state;
  }
  function rootReducer(state, action) {
    if (Kotlin.isType(action, AddMultipleChoice)) {
      var id = newId(state.multipleChoiceQuestions);
      return new State(multipleChoiceReducer(state.multipleChoiceQuestions, action, id), trueFalseReducer(state.trueFalseQuestions, action));
    } else if (Kotlin.isType(action, AddTrueFalseQuestion)) {
      var id_0 = newId(state.trueFalseQuestions);
      return new State(multipleChoiceReducer(state.multipleChoiceQuestions, action), trueFalseReducer(state.trueFalseQuestions, action, id_0));
    } else
      return new State(multipleChoiceReducer(state.multipleChoiceQuestions, action), trueFalseReducer(state.trueFalseQuestions, action));
  }
  var package$component = _.component || (_.component = {});
  package$component.AnyListProps = AnyListProps;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$component.fAnyList_faiav3$ = fAnyList;
  package$component.AppProps = AppProps;
  package$component.RouteNumberResult = RouteNumberResult;
  package$component.fApp = fApp;
  package$component.renderObject_q6otrr$ = renderObject;
  package$component.MultipleChoiceProps = MultipleChoiceProps;
  Object.defineProperty(package$component, 'fMultipleChoiceQuestion', {
    get: function () {
      return fMultipleChoiceQuestion;
    }
  });
  package$component.multipleChoiceQuestion_ujiqs9$ = multipleChoiceQuestion;
  package$component.MCQuestionEditProps = MCQuestionEditProps;
  Object.defineProperty(package$component, 'fMCQuestionEdit', {
    get: function () {
      return fMCQuestionEdit;
    }
  });
  package$component.MultipleChoiceFullProps = MultipleChoiceFullProps;
  package$component.fMultipleChoiceFull_61zpoe$ = fMultipleChoiceFull;
  package$component.TrueFalseProps = TrueFalseProps;
  Object.defineProperty(package$component, 'fTrueFalseQuestion', {
    get: function () {
      return fTrueFalseQuestion;
    }
  });
  package$component.trueFalseQuestion_79is33$ = trueFalseQuestion;
  package$component.TrueFalseEditProps = TrueFalseEditProps;
  Object.defineProperty(package$component, 'fTrueFalsetEdit', {
    get: function () {
      return fTrueFalsetEdit;
    }
  });
  package$component.TrueFalseFullProps = TrueFalseFullProps;
  package$component.fTrueFalseFull_61zpoe$ = fTrueFalseFull;
  var package$container = _.container || (_.container = {});
  package$container.AnyListDispatchProps = AnyListDispatchProps;
  package$container.AnyListStateProps = AnyListStateProps;
  Object.defineProperty(package$container, 'trueFalseListHOC', {
    get: function () {
      return trueFalseListHOC;
    }
  });
  Object.defineProperty(package$container, 'trueFalseListRClass', {
    get: function () {
      return trueFalseListRClass;
    }
  });
  Object.defineProperty(package$container, 'trueFalseListContainer', {
    get: function () {
      return trueFalseListContainer;
    }
  });
  Object.defineProperty(package$container, 'multipleChoiceListContainer', {
    get: function () {
      return multipleChoiceListContainer;
    }
  });
  Object.defineProperty(package$container, 'appContainer', {
    get: function () {
      return appContainer;
    }
  });
  package$container.MultipleChoiceEditOwnProps = MultipleChoiceEditOwnProps;
  Object.defineProperty(package$container, 'multipleChoiceEditContainer', {
    get: function () {
      return multipleChoiceEditContainer;
    }
  });
  package$container.TrueFalseEditOwnProps = TrueFalseEditOwnProps;
  Object.defineProperty(package$container, 'trueFalseEditContainer', {
    get: function () {
      return trueFalseEditContainer;
    }
  });
  package$container.MultipleChoiceFullDispatchProps = MultipleChoiceFullDispatchProps;
  package$container.MultipleChoiceFullStateProps = MultipleChoiceFullStateProps;
  package$container.MultipleChoiceFullOwnProps = MultipleChoiceFullOwnProps;
  Object.defineProperty(package$container, 'multipleChoiceFullContainer', {
    get: function () {
      return multipleChoiceFullContainer;
    }
  });
  package$container.TrueFalseFullStateProps = TrueFalseFullStateProps;
  package$container.TrueFalseFullOwnProps = TrueFalseFullOwnProps;
  Object.defineProperty(package$container, 'trueFalseFullContainer', {
    get: function () {
      return trueFalseFullContainer;
    }
  });
  var package$data = _.data || (_.data = {});
  package$data.Answer = Answer;
  package$data.MultipleChoice = MultipleChoice;
  package$data.MCQuestionsList = MCQuestionsList;
  package$data.State = State;
  package$data.newId_hx7udi$ = newId;
  package$data.initialState = initialState;
  package$data.TrueFalse = TrueFalse;
  package$data.TFQuestionsList = TFQuestionsList;
  Object.defineProperty(_, 'store', {
    get: function () {
      return store;
    }
  });
  _.main = main;
  var package$redux = _.redux || (_.redux = {});
  package$redux.AddTrueFalseQuestion = AddTrueFalseQuestion;
  package$redux.RemoveTrueFalseQuestion = RemoveTrueFalseQuestion;
  package$redux.ChangeTrueFalseQuestion = ChangeTrueFalseQuestion;
  package$redux.AddMultipleChoice = AddMultipleChoice;
  package$redux.RemoveMultipleChoice = RemoveMultipleChoice;
  package$redux.ChangeMultipleChoice = ChangeMultipleChoice;
  package$redux.multipleChoiceReducer_lxwfgc$ = multipleChoiceReducer;
  package$redux.trueFalseReducer_43qnui$ = trueFalseReducer;
  package$redux.rootReducer_mybawf$ = rootReducer;
  fMultipleChoiceQuestion = functionalComponent(fMultipleChoiceQuestion$lambda);
  fMCQuestionEdit = functionalComponent(fMCQuestionEdit$lambda);
  fTrueFalseQuestion = functionalComponent(fTrueFalseQuestion$lambda);
  fTrueFalsetEdit = functionalComponent(fTrueFalsetEdit$lambda);
  trueFalseListHOC = rConnect(trueFalseListHOC$lambda, trueFalseListHOC$lambda_0);
  trueFalseListRClass = fAnyList('True/False questions', '/TFQuestions', getCallableRef('trueFalseQuestion', function ($receiver, TrueFalse, onClick) {
    return trueFalseQuestion($receiver, TrueFalse, onClick);
  }));
  trueFalseListContainer = invoke(trueFalseListHOC, trueFalseListRClass);
  multipleChoiceListContainer = invoke(rConnect(multipleChoiceListContainer$lambda, multipleChoiceListContainer$lambda_0), fAnyList('Multiple choice questions', '/MCQuestions', getCallableRef('multipleChoiceQuestion', function ($receiver, MultipleChoice, onClick) {
    return multipleChoiceQuestion($receiver, MultipleChoice, onClick);
  })));
  appContainer = invoke(rConnect_0(appContainer$lambda, appContainer$lambda_0), fApp());
  multipleChoiceEditContainer = invoke(rConnect_1(multipleChoiceEditContainer$lambda), fMCQuestionEdit);
  trueFalseEditContainer = invoke(rConnect_1(trueFalseEditContainer$lambda), fTrueFalsetEdit);
  multipleChoiceFullContainer = invoke(rConnect(multipleChoiceFullContainer$lambda, multipleChoiceFullContainer$lambda_0), fMultipleChoiceFull('/MCQuestions'));
  trueFalseFullContainer = invoke(rConnect(trueFalseFullContainer$lambda, trueFalseFullContainer$lambda_0), fTrueFalseFull('/TFQuestions'));
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  tmp$ = getCallableRef('rootReducer', function (state, action) {
    return rootReducer(state, action);
  });
  tmp$_0 = initialState();
  tmp$_1 = rEnhancer();
  if (window.__REDUX_DEVTOOLS_EXTENSION__)
    tmp$_2 = window.__REDUX_DEVTOOLS_EXTENSION__();
  else
    tmp$_2 = function (f) {
      return f;
    };
  store = createStore(tmp$, tmp$_0, compose(tmp$_1, tmp$_2));
  main();
  Kotlin.defineModule('kotlinjs', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlinx-html-js'), require('kotlin-react-router-dom'), require('kotlin-react'), require('kotlin-react-redux'), require('kotlin-redux'), require('redux')));

//# sourceMappingURL=kotlinjs.js.map
