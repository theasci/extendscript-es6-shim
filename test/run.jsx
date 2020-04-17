var Global = Global || {};
Global.rootPath = new File($.fileName).parent.parent;
Global.modulesPath = new File(Global.rootPath + '/node_modules');

//Configure logger for jasmine LogReporter
$.evalFile(Global.modulesPath + '/extendscript-logger/index.jsx');
Global.logger = new Logger(Global.rootPath+'/log/test.log', 'INFO');

//Configure jasminejsx
Global.jasminejsx = {
	reportPending: true,
};

//Run jasmine specs
$.evalFile(Global.modulesPath + '/jasminejsx/test/run.jsx');
