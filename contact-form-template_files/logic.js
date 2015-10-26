
var creative = {};

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.isTouchable = isMobile.any();
  creative.dom.lightboxExit = document.getElementById('lightbox-exit');
  creative.dom.lightboxState = document.getElementById('lightbox-state');
  creative.dom.lightboxFeature = document.getElementById('lightbox-feature');
  creative.dom.invitationState = document.getElementById('invitation-state');
  creative.dom.expandButton = document.getElementById('expand-button');
  creative.dom.expandCta = document.getElementById('expand-cta');
  if (creative.isTouchable) {
    creative.dom.expandCta.innerHTML = '<img src="btn-tap-expand.jpg">';
  } else {
    creative.dom.expandCta.innerHTML = '<img src="btn-hover-expand.jpg">';
  }
  creative.dom.image0 = document.getElementById('stageOne');
  creative.dom.image1 = document.getElementById('stageTwo');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setExpandingPixelOffsets(0, 0, 600, 400, false, false);
  Enabler.setHint('expansionMode', 'lightbox');

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  if (creative.isTouchable) {
    creative.dom.expandButton.addEventListener('click', onExpandHandler, false);
  } else {
    creative.dom.expandButton.addEventListener('mouseover', onExpandHandler, false);
  }
  Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS, fullScreenDimensionsHandler);
  Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH, collapseFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,
    function(e) {
      supported = e.supported;
    });
  Enabler.queryFullscreenSupport();
  creative.dom.lightboxExit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.lightboxState.style.display = 'none';
  creative.dom.lightboxExit.style.display = 'none';
  creative.dom.invitationState.style.display = 'block';
  creative.dom.expandButton.style.display = 'block';
  creative.dom.image0.style.visibility  = 'visible';
  creative.dom.image1.style.visibility  = 'visible';
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function fullScreenDimensionsHandler(e) {
  Enabler.requestFullscreenExpand(e.width, e.height);
}


function expandStartHandler() {
  Enabler.finishFullscreenExpand();
};


function expandFinishHandler() {
  renderExpandedView();
};


function collapseStartHandler() {
  Enabler.finishFullscreenCollapse();
};


/**
 * Handle the expansion (could be click or hover).
 */
function onExpandHandler() {
  if (creative.isExpanded) {
    return;
  }
  // As per Lightbox specs, expanded state should always be fullscreen.
  Enabler.queryFullscreenDimensions();
};


function collapseFinishHandler() {
  renderCollapsedView();
};


function renderExpandedView() {
  // Show expand over the top
  creative.dom.lightboxState.style.display = 'block';
  creative.dom.lightboxExit.style.display = 'block';
  creative.dom.invitationState.style.display = 'none';
  creative.dom.expandButton.style.display = 'none';
  creative.isExpanded = true;
  Enabler.startTimer('Panel Expansion');
  Enabler.counter('Expanded Ctr');
  comp1.stop();
  comp2.play();
}


function renderCollapsedView() {
  // Perform collapse animation.
  creative.dom.lightboxState.style.display = 'none';
  creative.dom.lightboxExit.style.display = 'none';
  creative.dom.invitationState.style.display = 'block';
  creative.dom.expandButton.style.display = 'block';
  creative.isExpanded = false;
  Enabler.stopTimer('Panel Expansion');
  Enabler.counter('Collapse Ctr');
  comp1.play();
  comp2.stop();
}


function exitClickHandler() {
  Enabler.requestFullscreenCollapse();
  Enabler.stopTimer('Panel Expansion');
  Enabler.exit('Background Exit');
}

// Mobile detection
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) && hasTouchScreen();
  }
};

var hasTouchScreen = function(){var n=!1,o=function(n){return-1!==window.navigator.userAgent.toLowerCase().indexOf(n)};return("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(o("NT 5")||o("NT 6.1")||o("NT 6.0")||(n=!0)),n};

var CREATIVE_CONTAINER = 'studioV2.api.creatives[0].getAssets()[0].getContainerElement()';

Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, fsSupportHandler);

function fsSupportHandler() {
  Enabler.invokeExternalJsFunction(CREATIVE_CONTAINER + '.style.zIndex=9000');
  Enabler.invokeExternalJsFunction(CREATIVE_CONTAINER + '.children[0].style.overflow =\'visible\'');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
