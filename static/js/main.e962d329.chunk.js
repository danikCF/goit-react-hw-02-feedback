(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),i=n(3),r=n.n(i),s=n(4),d=n(5),l=n(6),b=n(8),u=n(7);function j(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t}),n]})}function h(e){var t=e.onHandleClick;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",name:"good",onClick:t,children:"good"}),Object(c.jsx)("button",{type:"button",name:"neutral",onClick:t,children:"neutral"}),Object(c.jsx)("button",{type:"button",name:"bad",onClick:t,children:"bad"})]})}function k(e){var t=e.countTotalFeedback,n=e.countPositiveFeedbackPercentage,a=e.good,o=e.neutral,i=e.bad;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Good:",a]}),Object(c.jsxs)("p",{children:["Neutral:",o]}),Object(c.jsxs)("p",{children:["Bad:",i]}),Object(c.jsxs)("p",{children:["Total:",t]}),Object(c.jsxs)("p",{children:["Positive Feedback:",n,"  %"]})]})}var O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onHandleClick=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return 100*this.state.good/this.countTotalFeedback()}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{title:"Please leave feedback",children:Object(c.jsx)(h,{onHandleClick:this.onHandleClick})}),Object(c.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(c.jsx)(k,{good:t,neutral:n,bad:a,countTotalFeedback:this.countTotalFeedback(),countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage()}):Object(c.jsx)("h2",{children:"No Feedback given!"})})]})}}]),n}(a.Component);function v(){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{})})}r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e962d329.chunk.js.map