export default {
	'toggleClassName': function(element,newClass) {
		//如果传入的色号带#s
		if(newClass.indexOf('#') > -1) newClass = newClass.substring(1)
		element.className = `custom-${newClass}`
	}
}

export const theme = [{color:'#20a0ff',name:'默认'},{color:'#fa4f52',name:'橙色'},{color:'#0000ff',name:'紫色'},{color:'#008000',name:'草绿'},{color:'#00a597',name:'蓝绿'}]