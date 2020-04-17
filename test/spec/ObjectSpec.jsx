$.evalFile(Global.rootPath + '/Object/assign.js');

describe('Object',function(){
	//Provided by extendscript-es6-shim
	//https://scotch.io/bar-talk/copying-objects-in-javascript
	describe('assign', function(){
		it('allows object copying', function(){
			var o = {a:'foo', b:2};
			var o2 = Object.assign({}, o);
			expect(o2.a).toEqual('foo');
			expect(o2.b).toEqual(2);
		});

		it('changes to copy does not affect origin', function(){
			var o = {a:'foo', b:2};
			var o2 = Object.assign({}, o);
			o2.a = 'baz';
			expect(o.a).toEqual('foo');
			expect(o2.a).toEqual('baz');
		});

		//https://scotch.io/bar-talk/copying-objects-in-javascript#toc-shallow-copying-objects
		it('does not shallow copy', function(){
			var o = {a: 1, b: {c: 2} };
			var o2 = Object.assign({}, o);
			expect(o2.a).toEqual(1);
			expect(o2.b).toEqual({c: 2}); //reference
			expect(o2.b.c).toEqual(2); //reference

			o.b.c = 3;
			expect(o2.a).toEqual(1);
			expect(o2.b).toEqual({c: 3}); //changed!
			expect(o2.b.c).toEqual(3); //changed!
		});

		it('copies methods', function(){
			var o = {f: function(c){return c;} };
			expect(o.f(66)).toEqual(66);

			var o2 = Object.assign({}, o);
			expect(o2.f(54)).toEqual(54);

			o2.f = function(c) { return c+1; }
			expect(o.f(358)).toEqual(358);
			expect(o2.f(14)).toEqual(15);
		});
	});

	describe('ways to merge', function(){
		var a = {a:1, b:2};
		var b = {b:1, c:2};

		// DO NOT DO THIS
		it('addition returns a string', function(){
			expect(a+b).toEqual('[object Object][object Object]')
		});

		//Not that useful
		it('Array.prototype.concat', function(){
			expect(Array.prototype.concat(a,b)).toEqual([{ a:1, b:2}, {b:1, c:2}]);
		});

		it('Object.assign', function(){
			expect(Object.assign({},a,b)).toEqual({ a:1, b:1, c:2});
			expect(a).toEqual({a:1, b:2});
			expect(b).toEqual({b:1, c:2});
		});
	});
});
