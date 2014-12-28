First define the microscript syntax in a meta tag within the head of the HTML document and include the microscripts.js file.
```html
<head>
	...
	<meta name="microscript-syntax" content="{{*}}">
	<script src="microscripts.js"></script>
	...
</head>
```

Then start using it!
```html
<body>
	PI * 2 = {{Math.PI * 2}}
</body>
```

The result of body should be something similar to `PI * 2 = 6.283185307179586`
