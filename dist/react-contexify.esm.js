import React, { Children, cloneElement, useState, useRef, useEffect, useContext, createContext, useReducer } from 'react';
import cx from 'clsx';
import { createPortal } from 'react-dom';
import ExecutionEnvironment from 'exenv';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isFn(v) {
  return typeof v === 'function';
}
function isStr(v) {
  return typeof v === 'string';
}
function isTouchEvent(e) {
  return e.type === 'touchend';
}
function cloneItems(children, props) {
  return Children.map( // remove null item
  Children.toArray(children).filter(Boolean), function (item) {
    return cloneElement(item, props);
  });
}
function getMousePosition(e) {
  var pos = {
    x: 0,
    y: 0
  };

  if (isTouchEvent(e) && e.changedTouches && e.changedTouches.length > 0) {
    pos.x = e.changedTouches[0].clientX;
    pos.y = e.changedTouches[0].clientY;
  } else {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  if (!pos.x || pos.x < 0) pos.x = 0;
  if (!pos.y || pos.y < 0) pos.y = 0;
  return pos;
}
function getPredicateValue(predicate, payload) {
  return isFn(predicate) ? predicate(payload) : predicate;
}
function hasExitAnimation(animation) {
  return !!(animation && (isStr(animation) || 'exit' in animation && animation.exit));
}
var canUseDOM = ExecutionEnvironment.canUseDOM;

var Portal = function Portal(_ref) {
  var children = _ref.children,
      mountNode = _ref.mountNode;

  var _useState = useState(false),
      canRender = _useState[0],
      setCanRender = _useState[1];

  var node = useRef();
  useEffect(function () {
    var parentNode;

    if (canUseDOM) {
      parentNode = document.body;
      node.current = document.createElement('div');

      if (isFn(mountNode)) {
        parentNode = mountNode();
      } else if (mountNode instanceof Element) {
        parentNode = mountNode;
      }

      parentNode.appendChild(node.current);
      setCanRender(true);
    }

    return function () {
      if (canUseDOM) {
        parentNode.removeChild(node.current);
      }
    };
  }, [mountNode]);

  if (!canUseDOM) {
    return null;
  }

  return canRender ? createPortal(children, node.current) : null;
};

var Context = /*#__PURE__*/createContext({});
/**
 * Access parent ref tracker.
 */

function useRefTrackerContext() {
  return useContext(Context);
}
var RefTrackerProvider = function RefTrackerProvider(props) {
  return React.createElement(Context.Provider, {
    value: props.refTracker
  }, props.children);
};

function createEventManager() {
  var eventList = new Map();
  return {
    on: function on(event, handler) {
      var _eventList$get;

      //eslint-disable-next-line @typescript-eslint/no-unused-expressions
      eventList.has(event) ? (_eventList$get = eventList.get(event)) == null ? void 0 : _eventList$get.add(handler) : eventList.set(event, new Set([handler]));
      return this;
    },
    off: function off(event, handler) {
      handler ? eventList.get(event)["delete"](handler) : eventList["delete"](event);
      return this;
    },
    emit: function emit(event, args) {
      if (process.env.NODE !== 'production') {
        var currentEv = event;

        if (!eventList.has(event) && currentEv !== 0
        /* HIDE_ALL */
        ) {
            console.error("It seems that the menu you are trying to display is not renderer or you have a menu id mismatch.", "You used the menu id: " + event);
          }
      }

      eventList.has(event) && eventList.get(event).forEach(function (handler) {
        handler(args);
      });
      return this;
    }
  };
}

var eventManager = /*#__PURE__*/createEventManager();

function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/**
 * Used to store children refs
 */

function useRefTracker() {
  return useRef(new Map()).current;
}

var contextMenu = {
  show: function show(_ref) {
    var id = _ref.id,
        event = _ref.event,
        props = _ref.props,
        position = _ref.position;
    if (event.preventDefault) event.preventDefault();
    eventManager.emit(0
    /* HIDE_ALL */
    ).emit(id, {
      event: event.nativeEvent || event,
      props: props,
      position: position
    });
  },
  hideAll: function hideAll() {
    eventManager.emit(0
    /* HIDE_ALL */
    );
  }
};

function useContextMenu(props) {
  return {
    show: function show(event, params) {
      if (process.env.NODE_ENV === 'development') {
        if (!(props == null ? void 0 : props.id) && !(params == null ? void 0 : params.id)) console.error("You need to provide an id when initializing the hook `useContextMenu({ id: 'your id' })` or when you display the menu `show(e, { id: 'your id' })`. The later is used to override the one defined during initialization.");
      }

      contextMenu.show({
        id: (params == null ? void 0 : params.id) || (props == null ? void 0 : props.id),
        props: (params == null ? void 0 : params.props) || (props == null ? void 0 : props.props),
        event: event,
        position: params == null ? void 0 : params.position
      });
    },
    hideAll: function hideAll() {
      contextMenu.hideAll();
    }
  };
}

/**
 * Used to control keyboard navigation
 */
function createMenuController() {
  var menuList = new Map();
  var focusedIndex;
  var parentNode;
  var isAtRoot;
  var currentItems;
  var forceCloseSubmenu = false;

  function init(rootMenu) {
    currentItems = rootMenu;
    focusedIndex = -1;
    isAtRoot = true;
  }

  function focusSelectedItem() {
    currentItems[focusedIndex].node.focus();
  }

  function isSubmenuFocused() {
    return focusedIndex >= 0 && currentItems[focusedIndex].isSubmenu;
  }

  function getSubmenuItems() {
    return Array.from(currentItems[focusedIndex].submenuRefTracker.values());
  }

  function isFocused() {
    if (focusedIndex === -1) {
      // focus first item
      moveDown();
      return false;
    }

    return true;
  }

  function moveDown() {
    if (focusedIndex + 1 < currentItems.length) {
      focusedIndex++;
    } else if (focusedIndex + 1 === currentItems.length) {
      focusedIndex = 0;
    }

    if (forceCloseSubmenu) closeSubmenu();
    focusSelectedItem();
  }

  function moveUp() {
    if (focusedIndex === -1 || focusedIndex === 0) {
      focusedIndex = currentItems.length - 1;
    } else if (focusedIndex - 1 < currentItems.length) {
      focusedIndex--;
    }

    if (forceCloseSubmenu) closeSubmenu();
    focusSelectedItem();
  }

  function openSubmenu() {
    if (isFocused() && isSubmenuFocused()) {
      var submenuItems = getSubmenuItems();
      var currentNode = currentItems[focusedIndex].node;
      menuList.set(currentNode, {
        isRoot: isAtRoot,
        focusedIndex: focusedIndex,
        parentNode: parentNode || currentNode,
        items: currentItems
      });
      currentNode.classList.add("react-contexify__submenu--is-open"
      /* submenuOpen */
      );
      parentNode = currentNode;

      if (submenuItems.length > 0) {
        focusedIndex = 0;
        currentItems = submenuItems;
      } else {
        forceCloseSubmenu = true;
      }

      isAtRoot = false;
      focusSelectedItem();
      return true;
    }

    return false;
  }

  function closeSubmenu() {
    if (isFocused() && !isAtRoot) {
      var _menuList$get = menuList.get(parentNode),
          isRoot = _menuList$get.isRoot,
          items = _menuList$get.items,
          parentFocusedIndex = _menuList$get.focusedIndex,
          menuParentNode = _menuList$get.parentNode;

      parentNode.classList.remove("react-contexify__submenu--is-open"
      /* submenuOpen */
      );
      currentItems = items;
      parentNode = menuParentNode;

      if (isRoot) {
        isAtRoot = true;
        menuList.clear();
      }

      if (!forceCloseSubmenu) {
        focusedIndex = parentFocusedIndex;
        focusSelectedItem();
      }
    }
  }

  return {
    init: init,
    moveDown: moveDown,
    moveUp: moveUp,
    openSubmenu: openSubmenu,
    closeSubmenu: closeSubmenu
  };
}

var theme = {
  light: 'light',
  dark: 'dark'
};
var animation = {
  fade: 'fade',
  flip: 'flip',
  scale: 'scale',
  slide: 'slide'
};
var NOOP = function NOOP() {};

function reducer(state, payload) {
  return isFn(payload) ? _extends({}, state, payload(state)) : _extends({}, state, payload);
}

var Menu = function Menu(_ref) {
  var _cx3;

  var id = _ref.id,
      theme = _ref.theme,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      mountNode = _ref.mountNode,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? 'scale' : _ref$animation,
      _ref$onHidden = _ref.onHidden,
      onHidden = _ref$onHidden === void 0 ? NOOP : _ref$onHidden,
      _ref$onShown = _ref.onShown,
      onShown = _ref$onShown === void 0 ? NOOP : _ref$onShown,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "theme", "style", "className", "children", "mountNode", "animation", "onHidden", "onShown"]);

  var _useReducer = useReducer(reducer, {
    x: 0,
    y: 0,
    visible: false,
    triggerEvent: {},
    propsFromTrigger: null,
    willLeave: false
  }),
      state = _useReducer[0],
      setState = _useReducer[1];

  var nodeRef = useRef(null);
  var didMount = useRef(false);
  var wasVisible = usePrevious(state.visible);
  var refTracker = useRefTracker();

  var _useState = useState(function () {
    return createMenuController();
  }),
      menuController = _useState[0]; // subscribe event manager


  useEffect(function () {
    didMount.current = true;
    eventManager.on(id, show).on(0
    /* HIDE_ALL */
    , hide);
    return function () {
      eventManager.off(id, show).off(0
      /* HIDE_ALL */
      , hide);
    }; // hide rely on setState(dispatch), which is guaranted to be the same across render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // handle show/ hide callback

  useEffect(function () {
    if (didMount.current && state.visible !== wasVisible) {
      state.visible ? onShown() : onHidden();
    } // wasWisible is a ref
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.visible, onHidden, onShown]); // collect menu items for keyboard navigation

  useEffect(function () {
    if (!state.visible) {
      refTracker.clear();
    } else {
      menuController.init(Array.from(refTracker.values()));
    }
  }, [state.visible, menuController, refTracker]); // compute menu position

  useEffect(function () {
    if (state.visible) {
      var _window = window,
          windowWidth = _window.innerWidth,
          windowHeight = _window.innerHeight;
      var _nodeRef$current = nodeRef.current,
          menuWidth = _nodeRef$current.offsetWidth,
          menuHeight = _nodeRef$current.offsetHeight;
      var _x = state.x,
          _y = state.y;

      if (_x + menuWidth > windowWidth) {
        _x -= _x + menuWidth - windowWidth;
      }

      if (_y + menuHeight > windowHeight) {
        _y -= _y + menuHeight - windowHeight;
      }

      setState({
        x: _x,
        y: _y
      });
    } // state.visible and state{x,y} are updated together
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.visible]); // subscribe dom events

  useEffect(function () {
    function handleKeyboard(e) {
      e.preventDefault();

      switch (e.key) {
        case 'Enter':
          if (!menuController.openSubmenu()) hide();
          break;

        case 'Escape':
          hide();
          break;

        case 'ArrowUp':
          menuController.moveUp();
          break;

        case 'ArrowDown':
          menuController.moveDown();
          break;

        case 'ArrowRight':
          menuController.openSubmenu();
          break;

        case 'ArrowLeft':
          menuController.closeSubmenu();
          break;
      }
    }

    if (state.visible) {
      window.addEventListener('resize', hide);
      window.addEventListener('contextmenu', hide);
      window.addEventListener('click', hide);
      window.addEventListener('scroll', hide);
      window.addEventListener('keydown', handleKeyboard); // This let us debug the menu in the console in dev mode

      if (process.env.NODE_ENV !== 'development') {
        window.addEventListener('blur', hide);
      }
    }

    return function () {
      window.removeEventListener('resize', hide);
      window.removeEventListener('contextmenu', hide);
      window.removeEventListener('click', hide);
      window.removeEventListener('scroll', hide);
      window.removeEventListener('keydown', handleKeyboard);

      if (process.env.NODE_ENV !== 'development') {
        window.removeEventListener('blur', hide);
      }
    }; // state.visible will let us get the right reference to `hide`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.visible, menuController]);

  function show(_ref2) {
    var event = _ref2.event,
        props = _ref2.props,
        position = _ref2.position;
    event.stopPropagation();

    var _ref3 = position || getMousePosition(event),
        x = _ref3.x,
        y = _ref3.y; // prevent react from batching the state update
    // if the menu is already visible we have to recompute bounding rect based on position


    setTimeout(function () {
      setState({
        visible: true,
        willLeave: false,
        x: x,
        y: y,
        triggerEvent: event,
        propsFromTrigger: props
      });
    }, 0);
  }

  function hide(event) {
    // Safari trigger a click event when you ctrl + trackpad
    // Firefox:  trigger a click event when right click occur
    var e = event;

    if (typeof e !== 'undefined' && (e.button === 2 || e.ctrlKey === true) && e.type !== 'contextmenu') {
      return;
    }

    hasExitAnimation(animation) ? setState(function (state) {
      return {
        willLeave: state.visible
      };
    }) : setState(function (state) {
      return {
        visible: state.visible ? false : state.visible
      };
    });
  }

  function handleAnimationEnd() {
    if (state.willLeave && state.visible) {
      setState({
        visible: false,
        willLeave: false
      });
    }
  }

  function computeAnimationClasses() {
    if (!animation) return null;

    if (isStr(animation)) {
      var _cx;

      return cx((_cx = {}, _cx["react-contexify__will-enter--"
      /* animationWillEnter */
      + animation] = animation && visible && !willLeave, _cx["react-contexify__will-leave--"
      /* animationWillLeave */
      + animation + " " + "react-contexify__will-leave--"
      /* animationWillLeave */
      + "'disabled'"] = animation && visible && willLeave, _cx));
    } else if ('enter' in animation && 'exit' in animation) {
      var _cx2;

      return cx((_cx2 = {}, _cx2["react-contexify__will-enter--"
      /* animationWillEnter */
      + animation.enter] = animation.enter && visible && !willLeave, _cx2["react-contexify__will-leave--"
      /* animationWillLeave */
      + animation.exit + " " + "react-contexify__will-leave--"
      /* animationWillLeave */
      + "'disabled'"] = animation.exit && visible && willLeave, _cx2));
    }

    return null;
  }

  var visible = state.visible,
      triggerEvent = state.triggerEvent,
      propsFromTrigger = state.propsFromTrigger,
      x = state.x,
      y = state.y,
      willLeave = state.willLeave;
  var cssClasses = cx("react-contexify"
  /* menu */
  , className, (_cx3 = {}, _cx3["react-contexify__theme--"
  /* theme */
  + theme] = theme, _cx3), computeAnimationClasses());

  var menuStyle = _extends({}, style, {
    left: x,
    top: y,
    opacity: 1
  });

  return React.createElement(Portal, {
    mountNode: mountNode
  }, React.createElement(RefTrackerProvider, {
    refTracker: refTracker
  }, visible && React.createElement("div", Object.assign({}, rest, {
    className: cssClasses,
    onAnimationEnd: handleAnimationEnd,
    style: menuStyle,
    ref: nodeRef,
    role: "menu"
  }), cloneItems(children, {
    propsFromTrigger: propsFromTrigger,
    triggerEvent: triggerEvent
  }))));
};

var Item = function Item(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      triggerEvent = _ref.triggerEvent,
      data = _ref.data,
      propsFromTrigger = _ref.propsFromTrigger,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? NOOP : _ref$onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "style", "triggerEvent", "data", "propsFromTrigger", "onClick", "disabled", "hidden"]);

  var refTracker = useRefTrackerContext();
  var handlerParams = {
    data: data,
    triggerEvent: triggerEvent,
    props: propsFromTrigger
  };
  var isDisabled = getPredicateValue(disabled, handlerParams);
  var isHidden = getPredicateValue(hidden, handlerParams);

  function handleClick(e) {
    handlerParams.event = e;
    isDisabled ? e.stopPropagation() : onClick(handlerParams);
  }

  function trackRef(node) {
    if (node && !isDisabled) refTracker.set(node, {
      node: node,
      isSubmenu: false
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handlerParams.event = e;
      onClick(handlerParams);
    }
  }

  if (isHidden) return null;
  var cssClasses = cx("react-contexify__item"
  /* item */
  , className, (_cx = {}, _cx["react-contexify__item--disabled"
  /* itemDisabled */
  ] = isDisabled, _cx));
  return React.createElement("div", Object.assign({}, rest, {
    className: cssClasses,
    style: style,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: trackRef,
    tabIndex: -1,
    role: "menuitem",
    "aria-disabled": isDisabled
  }), React.createElement("div", {
    className: "react-contexify__item__content"
    /* itemContent */

  }, children));
};

function Separator() {
  return React.createElement("div", {
    className: "react-contexify__separator"
    /* separator */

  });
}

var Submenu = function Submenu(_ref) {
  var _cx;

  var _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? '▶' : _ref$arrow,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      label = _ref.label,
      className = _ref.className,
      triggerEvent = _ref.triggerEvent,
      propsFromTrigger = _ref.propsFromTrigger,
      style = _ref.style,
      rest = _objectWithoutPropertiesLoose(_ref, ["arrow", "children", "disabled", "hidden", "label", "className", "triggerEvent", "propsFromTrigger", "style"]);

  var menuRefTracker = useRefTrackerContext();
  var refTracker = useRefTracker();
  var nodeRef = useRef(null);

  var _useState = useState({
    left: '100%',
    top: 0,
    bottom: 'initial'
  }),
      position = _useState[0],
      setPosition = _useState[1];

  var handlerParams = {
    triggerEvent: triggerEvent,
    props: propsFromTrigger
  };
  var isDisabled = getPredicateValue(disabled, handlerParams);
  var isHidden = getPredicateValue(hidden, handlerParams);
  useEffect(function () {
    if (nodeRef.current) {
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
      var rect = nodeRef.current.getBoundingClientRect();
      var _style = {};

      if (rect.right < innerWidth) {
        _style.left = '100%';
        _style.right = undefined;
      } else {
        _style.right = '100%';
        _style.left = undefined;
      }

      if (rect.bottom > innerHeight) {
        _style.bottom = 0;
        _style.top = 'initial';
      } else {
        _style.bottom = 'initial';
      }

      setPosition(_style);
    }
  }, []);

  function handleClick(e) {
    e.stopPropagation();
  }

  function trackRef(node) {
    if (node && !isDisabled) menuRefTracker.set(node, {
      node: node,
      isSubmenu: true,
      submenuRefTracker: refTracker
    });
  }

  if (isHidden) return null;
  var cssClasses = cx("react-contexify__item"
  /* item */
  , className, (_cx = {}, _cx["react-contexify__item--disabled"
  /* itemDisabled */
  ] = isDisabled, _cx));

  var submenuStyle = _extends({}, style, position);

  return React.createElement(RefTrackerProvider, {
    refTracker: refTracker
  }, React.createElement("div", Object.assign({}, rest, {
    className: cssClasses,
    ref: trackRef,
    tabIndex: -1,
    role: "menuitem",
    "aria-haspopup": true,
    "aria-disabled": isDisabled
  }), React.createElement("div", {
    className: "react-contexify__item__content"
    /* itemContent */
    ,
    onClick: handleClick
  }, label, React.createElement("span", {
    className: "react-contexify__submenu-arrow"
    /* submenuArrow */

  }, arrow)), React.createElement("div", {
    className: "react-contexify react-contexify__submenu"
    /* submenu */
    ,
    ref: nodeRef,
    style: submenuStyle
  }, cloneItems(children, {
    propsFromTrigger: propsFromTrigger,
    // injected by the parent
    triggerEvent: triggerEvent
  }))));
};

export { Item, Menu, Separator, Submenu, animation, contextMenu, theme, useContextMenu };
//# sourceMappingURL=react-contexify.esm.js.map