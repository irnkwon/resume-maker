(this["webpackJsonpresume-maker"]=this["webpackJsonpresume-maker"]||[]).push([[0],{128:function(e,a,t){e.exports=t(207)},133:function(e,a,t){},134:function(e,a,t){},207:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),l=t.n(o),c=(t(133),t(100)),i=t(101),h=t(102),s=t(124),m=t(126),d=(t(134),t(215)),p=t(211),E=t(216),g=t(217),u=t(214),C=t(212),f=t(213),k=t(210),b=t(218),y=t(219),v=t(220),D=t(221),j=t(222),w=t(223),S=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleChange=function(e,a,t){if("schoolDate"===t)n.setState({schoolStartDate:a[0]}),n.setState({schoolEndDate:a[1]});else if("companyDate"===t)n.setState({companyStartDate:a[0]}),n.setState({companyEndDate:a[1]});else{var r=e.target.value;n.setState(Object(c.a)({},e.target.name,r))}},n.state={name:"Irene Kwon",phone:"123-456-7890",email:"irene.haeryun.kwon@gmail.com",portfolio:"irnkwon.github.io",github:"github.com/irnkwon",linkedin:"linkedin.com/in/irene-kwon",schoolName:"Conestoga College",major:"Computer Programming/Analysis",degree:"Advanced Diploma",schoolLocation:"Waterloo, Ontario",schoolStartDate:"2015-09-08",schoolEndDate:"2020-04-22",eduDesc:"GPA: 3.87, Dean's Honor List, Graduation with Distinction",jobTitle:"Designer/Developer",companyName:"WSIB Ontairo",companyLocation:"Kitchener, Ontario",companyStartDate:"2018-04-30",companyEndDate:"2019-08-30",jobDesc:"Created 5+ web and mobile applications mainly using React, React Native, CSS, Node.js, Express.js, GraphQL, Firebase, Git and Sketch",projectName:"Resume Maker",projectLink:"github.com/irnkwon/resume-maker",projectDesc:"Implemented a web application that helps users make an online resume"},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this,a=d.a.Panel,t=p.a.RangePicker,n=E.a.TextArea,o=g.a.Sider,l=g.a.Content,c=g.a.Footer,i=u.a.Title,h=u.a.Paragraph,s=u.a.Text,m=C.a.Option,S=r.a.createElement(C.a,{defaultValue:"http://",className:"select-before"},r.a.createElement(m,{value:"http://"},"http://"),r.a.createElement(m,{value:"https://"},"https://"));return r.a.createElement(g.a,{className:"app-container"},r.a.createElement(o,{width:350,theme:"light"},r.a.createElement(f.a,{title:"Resume Maker",bordered:!1},r.a.createElement(d.a,{defaultActiveKey:["1","2","3","4","5"],ghost:!0},r.a.createElement(a,{header:"Basic Information",key:"1"},r.a.createElement(E.a,{name:"name",placeholder:"Your Name",onChange:this.handleChange})),r.a.createElement(a,{header:"Contact",key:"2"},r.a.createElement(k.a,{direction:"vertical",size:12},r.a.createElement(E.a,{name:"phone",placeholder:"Phone Number",onChange:this.handleChange}),r.a.createElement(E.a,{name:"email",placeholder:"Email Address",onChange:this.handleChange}),r.a.createElement(E.a,{name:"portfolio",placeholder:"Portfolio Address",addonBefore:S,onChange:this.handleChange}),r.a.createElement(E.a,{name:"github",placeholder:"Github Address",addonBefore:S,onChange:this.handleChange}),r.a.createElement(E.a,{name:"linkedin",placeholder:"LinkedIn Address",addonBefore:S,onChange:this.handleChange}))),r.a.createElement(a,{header:"Education",key:"3"},r.a.createElement(k.a,{direction:"vertical"},r.a.createElement(E.a,{name:"schoolName",placeholder:"School",onChange:this.handleChange}),r.a.createElement(E.a,{name:"major",placeholder:"Major",onChange:this.handleChange}),r.a.createElement(E.a,{name:"degree",placeholder:"Degree",onChange:this.handleChange}),r.a.createElement(t,{bordered:!0,onChange:function(a,t){return e.handleChange(a,t,"schoolDate")}}),r.a.createElement(E.a,{name:"schoolLocation",placeholder:"Location",onChange:this.handleChange}),r.a.createElement(n,{name:"eduDesc",placeholder:"Education Description",onChange:this.handleChange}))),r.a.createElement(a,{header:"Experience",key:"4"},r.a.createElement(k.a,{direction:"vertical"},r.a.createElement(E.a,{name:"jobTitle",placeholder:"Job Title",onChange:this.handleChange}),r.a.createElement(E.a,{name:"companyName",placeholder:"Company",onChange:this.handleChange}),r.a.createElement(t,{bordered:!0,onChange:function(a,t){return e.handleChange(a,t,"companyDate")}}),r.a.createElement(E.a,{name:"companyLocation",placeholder:"Location",onChange:this.handleChange}),r.a.createElement(n,{name:"jobDesc",placeholder:"Experience Description",onChange:this.handleChange}))),r.a.createElement(a,{header:"Projects",key:"5"},r.a.createElement(k.a,{direction:"vertical"},r.a.createElement(E.a,{name:"projectName",placeholder:"Project Name",onChange:this.handleChange}),r.a.createElement(E.a,{name:"projectLink",placeholder:"Project Link",onChange:this.handleChange}),r.a.createElement(n,{name:"projectDesc",placeholder:"Project Description",onChange:this.handleChange})))))),r.a.createElement(g.a,{className:"main-content"},r.a.createElement(l,null,r.a.createElement(k.a,{direction:"vertical"},r.a.createElement(i,{level:1},this.state.name),r.a.createElement(k.a,{direction:"vertical",size:1},r.a.createElement(h,null,r.a.createElement(b.a,null)," ",this.state.phone),r.a.createElement(h,null,r.a.createElement("a",{href:"mailto:"+this.state.email},r.a.createElement(y.a,null)," ",this.state.email)),r.a.createElement(h,null,r.a.createElement("a",{href:"http://"+this.state.portfolio,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,null)," ",this.state.portfolio)),r.a.createElement(h,null,r.a.createElement("a",{href:"http://"+this.state.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.a,null)," ",this.state.github)),r.a.createElement(h,null,r.a.createElement("a",{href:"http://"+this.state.linkedin,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(j.a,null)," ",this.state.linkedin))),r.a.createElement(k.a,{direction:"vertical",style:{marginTop:30}},r.a.createElement(i,{level:3,underline:!0},"Education"),r.a.createElement(i,{level:4},this.state.major,", ",this.state.schoolName),r.a.createElement(s,{strong:!0},this.state.degree),r.a.createElement(s,{type:"secondary"},this.state.schoolStartDate," to ",this.state.schoolEndDate," \xb7 ",this.state.schoolLocation),r.a.createElement(s,null,this.state.eduDesc)),r.a.createElement(k.a,{direction:"vertical",style:{marginTop:30}},r.a.createElement(i,{level:3,underline:!0},"Experience"),r.a.createElement(i,{level:4},this.state.jobTitle,", ",this.state.companyName),r.a.createElement(s,{type:"secondary"},this.state.companyStartDate," to ",this.state.companyEndDate," \xb7 ",this.state.companyLocation),r.a.createElement(s,null,this.state.jobDesc)),r.a.createElement(k.a,{direction:"vertical",style:{marginTop:30}},r.a.createElement(i,{level:3,underline:!0},"Projects"),r.a.createElement(k.a,{direction:"horizontal",size:7},r.a.createElement(i,{level:4},this.state.projectName),r.a.createElement("a",{href:"http://"+this.state.projectLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(w.a,{style:{fontSize:20}}))),r.a.createElement(s,null,this.state.projectDesc)))),r.a.createElement(c,{className:"footer"},"2020 \xa9 designed and developed by Irene Kwon")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.6b03f69b.chunk.js.map