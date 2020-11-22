(this["webpackJsonpdata-browser"]=this["webpackJsonpdata-browser"]||[]).push([[0],{199:function(e,a,t){"use strict";t.r(a);var r=t(4),i=t(0),s=t.n(i),l=t(10),n=t.n(l),c=(t(98),t(41)),h=t(42),o=t(49),g=t(48),p=t(82),u=t(61),j=(t(99),{apiKey:p.apiKeyHidden,authDomain:"smv-daq.firebaseapp.com",databaseURL:"https://smv-daq.firebaseio.com",projectId:"smv-daq",storageBucket:"bucket.appspot.com"});u.a.initializeApp(j);var d=u.a,b=t(202),v=t(233),m=t(234),f=t(232),O=t(228),x=t(7),T=t(83),S=t(236),D=t(237),y=(t(66),t(197),function(e){Object(o.a)(t,e);var a=Object(g.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e,a={labels:this.props.labels,datasets:[{label:this.props.name,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(66, 129, 245,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.props.vals,trendlineLinear:{style:"rgba(255,255,255,0.8",lineStyle:"solid",width:3}}]},t=+(e=this.props.vals,e.reduce((function(e,a){return e+a}))/e.length).toPrecision(4);return Object(r.jsxs)("div",{children:[Object(r.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(r.jsx)(O.a,{item:!0,xs:1}),Object(r.jsx)(O.a,{item:!0,xs:2,children:Object(r.jsxs)(S.a,{onChange:this.props.changeDialogState,defaultValue:"hall-effect|speed",children:[Object(r.jsx)(D.a,{value:"hall-effect|rpm",children:"RPM"}),Object(r.jsx)(D.a,{value:"hall-effect|speed",children:"Speed"}),Object(r.jsx)(D.a,{value:"hall-effect|throttle",children:"Throttle"}),Object(r.jsx)(D.a,{value:"accelerometer|acceleration x",children:"Acceleration X"}),Object(r.jsx)(D.a,{value:"accelerometer|acceleration y",children:"Acceleration Y"}),Object(r.jsx)(D.a,{value:"accelerometer|acceleration z",children:"Acceleration Z"}),Object(r.jsx)(D.a,{value:"joulemeter|current",children:"Current"}),Object(r.jsx)(D.a,{value:"joulemeter|power",children:"Power"}),Object(r.jsx)(D.a,{value:"joulemeter|voltage",children:"Voltage"}),Object(r.jsx)(D.a,{value:"magnetometer|MagX",children:"MagX"}),Object(r.jsx)(D.a,{value:"magnetometer|MagY",children:"MagY"}),Object(r.jsx)(D.a,{value:"magnetometer|MagZ",children:"MagZ"}),Object(r.jsx)(D.a,{value:"gyroscope|GyX",children:"GyX"}),Object(r.jsx)(D.a,{value:"gyroscope|GyY",children:"GyY"}),Object(r.jsx)(D.a,{value:"gyroscope|GyZ",children:"GyZ"}),Object(r.jsx)(D.a,{value:"gyroscope|heading",children:"Heading"}),Object(r.jsx)(D.a,{value:"gyroscope|pitch",children:"Pitch"}),Object(r.jsx)(D.a,{value:"gyroscope|roll",children:"Roll"}),Object(r.jsx)(D.a,{value:"gps|latitude",children:"Latitude"}),Object(r.jsx)(D.a,{value:"gps|longitude",children:"Longitude"}),Object(r.jsx)(D.a,{value:"environment|altitude",children:"Altitude"}),Object(r.jsx)(D.a,{value:"environment|temperature",children:"Temperature"})]})}),Object(r.jsx)(O.a,{item:!0,xs:2,children:Object(r.jsxs)(f.a,{variant:"body1",children:["Average: ",t]})}),Object(r.jsx)(O.a,{item:!0,xs:5}),Object(r.jsx)(O.a,{item:!0,xs:2,children:Object(r.jsx)(S.a,{onChange:this.props.changeTrial,defaultValue:"1",children:this.props.trials.map((function(e){return[Object(r.jsx)(D.a,{value:e,children:"Trial "+e})]}))})})]}),Object(r.jsx)(O.a,{container:!0,direction:"row",children:Object(r.jsx)(O.a,{item:!0,xs:12,children:Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)(T.Line,{data:a,height:125})})})})})]})}}]),t}(s.a.Component)),w=function(e){Object(o.a)(t,e);var a=Object(g.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=a.call(this,e)).toggleDrawer=function(){r.setState({drawerOpen:!r.state.drawerOpen})},r.handleClose=function(){r.setState({drawerOpen:!1})},r.setTrial=function(e){e!==r.state.trialNumber&&r.setState({trialNumber:e})},r.changeDialogState1=function(e){r.setState({graph1value:e.target.value})},r.changeDialogState2=function(e){r.setState({graph2value:e.target.value})},r.changeDialogState3=function(e){r.setState({graph3value:e.target.value})},r.changeDialogState4=function(e){r.setState({graph4value:e.target.value})},r.changeTrial1=function(e){console.log("changeTrial1"),r.setState({graph1Trial:e.target.value.toString()})},r.changeTrial2=function(e){console.log("changeTrial2"),r.setState({graph2Trial:e.target.value.toString()})},r.changeTrial3=function(e){r.setState({graph3Trial:e.target.value.toString()})},r.changeTrial4=function(e){r.setState({graph4Trial:e.target.value.toString()})},r.state={allData:{},trials:[],drawerOpen:!1,graph1value:"hall-effect|speed",graph2value:"hall-effect|speed",graph3value:"hall-effect|speed",graph4value:"hall-effect|speed",graph1Data:[],graph2Data:[],graph3Data:[],graph4Data:[],trialTimes:[],graph1Times:[],graph2Times:[],graph3Times:[],graph4Times:[],graph1Trial:"1",graph2Trial:"1",graph3Trial:"1",graph4Trial:"1"},r}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=d.database(),t=[];a.ref().on("value",(function(r){var i=r.val();Object.keys(i).forEach((function(e){"T"===e[0]&&t.push(Number(e.substring(6)))})),a.ref("Trial 1").on("value",(function(a){var t=a.val(),r=[],i=[],s=[],l=[],n=[],c=e.state.graph1value.split("|"),h=e.state.graph2value.split("|"),o=e.state.graph3value.split("|"),g=e.state.graph4value.split("|");Object.keys(t).forEach((function(e){Number.isInteger(Number(e[0]))&&r.push(e),i.push(t[e][c[0]][c[1]]),s.push(t[e][h[0]][h[1]]),l.push(t[e][o[0]][o[1]]),n.push(t[e][g[0]][h[1]])})),e.setState({graph1Times:r,graph2Times:r,graph3Times:r,graph4Times:r,graph1Data:i,graph2Data:s,graph3Data:l,graph4Data:n})})),t.sort((function(e,a){return e-a})),e.setState({allData:i,trials:t})}))}},{key:"componentDidUpdate",value:function(e,a){var t=this;a.graph1value===this.state.graph1value&&a.graph1Trial===this.state.graph1Trial||(console.log("data1"),d.database().ref("Trial "+this.state.graph1Trial).on("value",(function(e){var a=e.val(),r=[],i=[],s=t.state.graph1value.split("|");Object.keys(a).forEach((function(e){Number.isInteger(Number(e[0]))&&(i.push(e),r.push(a[e][s[0]][s[1]]))})),t.setState({graph1Times:i,graph1Data:r})})));a.graph2value===this.state.graph2value&&a.graph2Trial===this.state.graph2Trial||(console.log("data2"),d.database().ref("Trial "+this.state.graph2Trial).on("value",(function(e){var a=e.val(),r=[],i=[],s=t.state.graph2value.split("|");Object.keys(a).forEach((function(e){Number.isInteger(Number(e[0]))&&(i.push(e),r.push(a[e][s[0]][s[1]]))})),t.setState({graph2Times:i,graph2Data:r})})));a.graph3value===this.state.graph3value&&a.graph3Trial===this.state.graph3Trial||d.database().ref("Trial "+this.state.graph3Trial).on("value",(function(e){var a=e.val(),r=[],i=[],s=t.state.graph3value.split("|");Object.keys(a).forEach((function(e){Number.isInteger(Number(e[0]))&&(i.push(e),r.push(a[e][s[0]][s[1]]))})),t.setState({graph3Times:i,graph3Data:r})}));a.graph4value===this.state.graph4value&&a.graph4Trial===this.state.graph4Trial||d.database().ref("Trial "+this.state.graph4Trial).on("value",(function(e){var a=e.val(),r=[],i=[],s=t.state.graph4value.split("|");Object.keys(a).forEach((function(e){Number.isInteger(Number(e[0]))&&(i.push(e),r.push(a[e][s[0]][s[1]]))})),t.setState({graph4Times:i,graph4Data:r})}))}},{key:"render",value:function(){var e=this.props.classes;return console.log(this.state.graph2Trial),Object(r.jsxs)(b.a,{className:e.root,square:!0,children:[Object(r.jsx)(v.a,{position:"static",children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(f.a,{component:"h1",variant:"h6",className:e.title,children:"Bruin Supermileage Data Browser"}),Object(r.jsx)("img",{src:"/SMVDataBrowser/icon.png",height:"40rem",alt:""})]})}),Object(r.jsxs)(O.a,{container:!0,direction:"row",children:[Object(r.jsx)(O.a,{item:!0,xs:6,className:e.grid,children:Object(r.jsx)(y,{changeDialogState:this.changeDialogState1,vals:this.state.graph1Data,name:this.state.graph1value.split("|")[1].split(" ").map(C).join(" "),labels:this.state.graph1Times,trials:this.state.trials,changeTrial:this.changeTrial1})}),Object(r.jsx)(O.a,{item:!0,xs:6,children:Object(r.jsx)(y,{changeDialogState:this.changeDialogState2,vals:this.state.graph2Data,name:this.state.graph2value.split("|")[1].split(" ").map(C).join(" "),labels:this.state.graph2Times,trials:this.state.trials,changeTrial:this.changeTrial2})})]}),Object(r.jsxs)(O.a,{container:!0,direction:"row",children:[Object(r.jsx)(O.a,{item:!0,xs:6,children:Object(r.jsx)(y,{changeDialogState:this.changeDialogState3,vals:this.state.graph3Data,name:this.state.graph3value.split("|")[1].split(" ").map(C).join(" "),labels:this.state.graph3Times,trials:this.state.trials,changeTrial:this.changeTrial3})}),Object(r.jsx)(O.a,{item:!0,xs:6,children:Object(r.jsx)(y,{changeDialogState:this.changeDialogState4,vals:this.state.graph4Data,name:this.state.graph4value.split("|")[1].split(" ").map(C).join(" "),labels:this.state.graph4Times,trials:this.state.trials,changeTrial:this.changeTrial4})})]})]})}}]),t}(s.a.Component),k=Object(x.a)((function(e){return{root:{height:"100%",width:"100%",position:"fixed",backgroundColor:"rgb(51, 48, 48)"},drawer:{width:"10rem",position:"relative"},menuIcon:{marginRight:32},title:{flexGrow:1}}}))(w);function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}var N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,238)).then((function(a){var t=a.getCLS,r=a.getFID,i=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),r(e),i(e),s(e),l(e)}))},B=t(88),I=t(235),M=Object(B.a)({palette:{type:"dark"}});n.a.render(Object(r.jsx)(I.a,{theme:M,children:Object(r.jsx)(k,{})}),document.getElementById("root")),N()},82:function(e,a){},98:function(e,a,t){}},[[199,1,2]]]);
//# sourceMappingURL=main.e5853a0c.chunk.js.map