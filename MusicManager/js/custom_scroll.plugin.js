(function($){

    $.fn.custom_scroll = function (options) {
        
        var scroll={
          arrowDown:         null,
          arrowUp:           null,
          contentHeight:     0,
          controls:          null,
          hideDefaultScroll: null,
          ID:                Math.floor(Math.random()*1000),
          slider:            null,
          sliderHeight:      0,
          space:             null,
          stepValue:         100,
          track:             null,
          topShift:          0,
          wrapSpace:         null
        }
        scroll.space = this;

        var percent100 = 100;
        
        
        
 
        
        
        CreateStructure = function(customScroll) {
          customScroll.space.wrap(
          '<div class="custom_scroll" id="custom_scroll_'+(customScroll.ID)+'">'  +
            '<div class="custom_scroll_hide_scroll"></div>'                          +
          '</div>'
          );
          
          customScroll.space.addClass('custom_scroll_place');
          customScroll.wrapSpace = $('.custom_scroll#custom_scroll_'+customScroll.ID);
          customScroll.hideDefaultScroll = $('#custom_scroll_'+customScroll.ID+' .custom_scroll_hide_scroll');
          
          customScroll.wrapSpace.append(
          '<div class="custom_scroll_controls">'                               +
            '<button class="custom_scroll_arrow up" type="button"></button>'   +
            '<div class="custom_scroll_track">'                                +
              '<div class="custom_scroll_slider" tabindex="-1"></div>'         +
            '</div>'                                                           +
            '<button class="custom_scroll_arrow down" type="button"></button>' +
          '</div>'                                                         
          );
        
          customScroll.controls = $('#custom_scroll_'+customScroll.ID+' .custom_scroll_controls');
          customScroll.track = $('#custom_scroll_'+customScroll.ID+' .custom_scroll_track');
          customScroll.arrowUp = $('#custom_scroll_'+customScroll.ID+' .custom_scroll_arrow.up');
          customScroll.arrowDown = $('#custom_scroll_'+customScroll.ID+' .custom_scroll_arrow.down');
          customScroll.slider = $('#custom_scroll_'+customScroll.ID+' .custom_scroll_slider');
          
          if ( customScroll.space.prop('scrollHeight') <= customScroll.space.height() ) {
            customScroll.controls.addClass('hide');
          }
  
          return customScroll;
        }
        
        
        
        
        SetStaticSizes = function (customScroll) {
          customScroll.wrapSpace.css({width: customScroll.space.width(), height: customScroll.space.height()});
          customScroll.hideDefaultScroll.css({width: customScroll.space.width()});
          
          return customScroll;
        }
        
        
        
        
        Resizable = function (customScroll) {
          customScroll.contentHeight = customScroll.space.prop('scrollHeight');
          customScroll.track.css({height: customScroll.controls.height() - customScroll.arrowUp.height() - customScroll.arrowDown.height()});
          customScroll.sliderHeight = CalcRatio( customScroll.wrapSpace.height(), percent100, customScroll.contentHeight );
          customScroll.slider.css({height: customScroll.sliderHeight+'%'});
      
          return customScroll;
        }
   
   
   
   
   
        
        
        CalcRatio = function(multiplier1, multiplier2, divisor) {
          return multiplier1 * multiplier2 / divisor;
        }
        
        
        MoveDefaultSlider = function(scrollSpace, sliderDefaultTopPosition) {
          return scrollSpace.scrollTop(sliderDefaultTopPosition);
        }
        
                
        MoveCustomSlider = function(scrollSlider, sliderCustomTopPosition) {
          return scrollSlider.css({top: sliderCustomTopPosition+'%'});
        }
        
        
        
        
        
        return this.each(function () {
       
          scroll = CreateStructure(scroll);
          scroll = SetStaticSizes(scroll);
          scroll = Resizable(scroll);
          
          scroll.space.bind('mousewheel', function(e) {
            scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            scroll = Resizable(scroll);
          }); 

          scroll.slider.draggable({ 
            axis: 'y',
            containment: 'parent',
            drag: function(e, ui) {
              scroll.space = MoveDefaultSlider(scroll.space, CalcRatio(CalcRatio(ui.position.top, percent100, scroll.track.height()), scroll.contentHeight, percent100));
            } 
          }); 
          
          
          scroll.track.bind('click', function(e) {

            var scrollSliderNextCenter = e.pageY - $(this).offset().top;
            var sliderY0 = scrollSliderNextCenter - Math.floor(scroll.slider.height()/2);
            var sliderYn = scrollSliderNextCenter + Math.floor(scroll.slider.height()/2);
            
            if (sliderY0 >= 0 && sliderYn <= scroll.track.height()) {
              scroll.space  = MoveDefaultSlider(scroll.space, CalcRatio(CalcRatio(sliderY0, percent100, scroll.track.height()), scroll.contentHeight, percent100));
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
            else if (sliderY0 < 0) {
              scroll.space  = MoveDefaultSlider(scroll.space, 0);
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
            else if (sliderYn > scroll.track.height()) {
              scroll.space  = MoveDefaultSlider(scroll.space, scroll.contentHeight);
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
            else return false;
          });
          
                
          scroll.arrowUp.bind('click', function() {
            if (scroll.space.scrollTop() - scroll.stepValue >= 0) {
              scroll.space  = MoveDefaultSlider(scroll.space, scroll.space.scrollTop() - scroll.stepValue);
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
            else {
              scroll.space  = MoveDefaultSlider(scroll.space, 0);
              scroll.slider = MoveCustomSlider(scroll.slider, 0);
            }
          });
          
          
          
          scroll.arrowDown.bind('click', function() {
            if (scroll.space.scrollTop() + scroll.stepValue <= scroll.contentHeight) {
              scroll.space  = MoveDefaultSlider(scroll.space, scroll.space.scrollTop() + scroll.stepValue);
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
            else {
              scroll.space  = MoveDefaultSlider(scroll.space, scroll.contentHeight - scroll.slider.height());
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
          });
          

          scroll.space.attr("tabindex",-1).click(function() {
            if (scroll.space.attr("tabindex",-1).is(":focus")) {
              $(this).keydown(function(e) {
                if (e.keyCode == 33 || e.keyCode == 34 || e.keyCode == 38 || e.keyCode == 40) {
                  scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
                  scroll = Resizable(scroll);
                }
              });
            }
          });

          
          setInterval(function() {
            if (scroll.space.prop('scrollHeight') != scroll.contentHeight) {
              if ( scroll.space.prop('scrollHeight') <= scroll.space.height() ) {
                scroll.controls.addClass('hide');
              }
              else if (scroll.space.prop('scrollHeight') > scroll.space.height()) {
                scroll.controls.removeClass('hide');
              }
              scroll.contentHeight = scroll.space.prop('scrollHeight');
              scroll = Resizable(scroll);
              scroll.slider = MoveCustomSlider(scroll.slider, CalcRatio( scroll.space.scrollTop(), percent100, scroll.contentHeight ));
            }
          },100);
        });
    }

    
    
})(jQuery);