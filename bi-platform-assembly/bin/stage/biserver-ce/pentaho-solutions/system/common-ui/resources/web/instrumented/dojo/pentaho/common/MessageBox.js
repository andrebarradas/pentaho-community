/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['dojo/pentaho/common/MessageBox.js']) {
  _$jscoverage['dojo/pentaho/common/MessageBox.js'] = [];
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][1] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][2] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][3] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][4] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][5] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][6] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][13] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][17] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][22] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][23] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][24] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][25] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][26] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][27] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][28] = 0;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][30] = 0;
}
_$jscoverage['dojo/pentaho/common/MessageBox.js'].source = ["dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">'pentaho.common.MessageBox'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'dijit._Widget'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'dijit._Templated'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'pentaho.common.button'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'pentaho.common.Dialog'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span>","     <span class=\"s\">'pentaho.common.MessageBox'</span><span class=\"k\">,</span>","     <span class=\"k\">[</span>pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>Dialog<span class=\"k\">],</span>","     <span class=\"k\">{</span>","        buttons<span class=\"k\">:</span> <span class=\"k\">[</span><span class=\"s\">'btn1'</span><span class=\"k\">,</span><span class=\"s\">'btn2'</span><span class=\"k\">,</span><span class=\"s\">'btn3'</span><span class=\"k\">],</span>","        ","        setTitle<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>title<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>set<span class=\"k\">(</span><span class=\"s\">\"title\"</span><span class=\"k\">,</span>title<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","","        setMessage<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>message<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>messagelbl<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> message<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","","        setButtons<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>buttons<span class=\"k\">)</span> <span class=\"k\">{</span>","        ","            <span class=\"k\">this</span><span class=\"k\">.</span>buttons <span class=\"k\">=</span> buttons<span class=\"k\">;</span>","            <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">&lt;</span><span class=\"s\">3</span><span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                <span class=\"k\">var</span> button <span class=\"k\">=</span> dojo<span class=\"k\">.</span>query<span class=\"k\">(</span><span class=\"s\">\"button\"</span><span class=\"k\">+</span>i<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>domNode<span class=\"k\">)</span>","                <span class=\"k\">if</span><span class=\"k\">(</span>button<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"k\">if</span><span class=\"k\">(</span>i<span class=\"k\">&lt;</span><span class=\"k\">this</span><span class=\"k\">.</span>buttons<span class=\"k\">.</span>length<span class=\"k\">)</span> <span class=\"k\">{</span>","                        button<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>buttons<span class=\"k\">[</span>i<span class=\"k\">];</span>","                        dojo<span class=\"k\">.</span>removeClass<span class=\"k\">(</span>button<span class=\"k\">,</span> <span class=\"s\">'hidden'</span><span class=\"k\">);</span>","                    <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                        dojo<span class=\"k\">.</span>addClass<span class=\"k\">(</span>button<span class=\"k\">,</span> <span class=\"s\">'hidden'</span><span class=\"k\">);</span>","                    <span class=\"k\">}</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","","        templatePath<span class=\"k\">:</span> dojo<span class=\"k\">.</span>moduleUrl<span class=\"k\">(</span><span class=\"s\">'pentaho.common'</span><span class=\"k\">,</span> <span class=\"s\">'MessageBox.html'</span><span class=\"k\">)</span>","           ","      <span class=\"k\">}</span>","<span class=\"k\">);</span>"];
_$jscoverage['dojo/pentaho/common/MessageBox.js'][1]++;
dojo.provide("pentaho.common.MessageBox");
_$jscoverage['dojo/pentaho/common/MessageBox.js'][2]++;
dojo.require("dijit._Widget");
_$jscoverage['dojo/pentaho/common/MessageBox.js'][3]++;
dojo.require("dijit._Templated");
_$jscoverage['dojo/pentaho/common/MessageBox.js'][4]++;
dojo.require("pentaho.common.button");
_$jscoverage['dojo/pentaho/common/MessageBox.js'][5]++;
dojo.require("pentaho.common.Dialog");
_$jscoverage['dojo/pentaho/common/MessageBox.js'][6]++;
dojo.declare("pentaho.common.MessageBox", [pentaho.common.Dialog], {buttons: ["btn1", "btn2", "btn3"], setTitle: (function (title) {
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][13]++;
  this.set("title", title);
}), setMessage: (function (message) {
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][17]++;
  this.messagelbl.innerHTML = message;
}), setButtons: (function (buttons) {
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][22]++;
  this.buttons = buttons;
  _$jscoverage['dojo/pentaho/common/MessageBox.js'][23]++;
  for (var i = 0; (i < 3); (i++)) {
    _$jscoverage['dojo/pentaho/common/MessageBox.js'][24]++;
    var button = dojo.query(("button" + i), this.popup.domNode);
    _$jscoverage['dojo/pentaho/common/MessageBox.js'][25]++;
    if (button) {
      _$jscoverage['dojo/pentaho/common/MessageBox.js'][26]++;
      if ((i < this.buttons.length)) {
        _$jscoverage['dojo/pentaho/common/MessageBox.js'][27]++;
        button.innerHTML = this.buttons[i];
        _$jscoverage['dojo/pentaho/common/MessageBox.js'][28]++;
        dojo.removeClass(button, "hidden");
      }
      else {
        _$jscoverage['dojo/pentaho/common/MessageBox.js'][30]++;
        dojo.addClass(button, "hidden");
      }
    }
}
}), templatePath: dojo.moduleUrl("pentaho.common", "MessageBox.html")});