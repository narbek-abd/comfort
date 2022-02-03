export default [
	{
		id: 1,
		name: "About",
		link: "/",
	},

	{
		id: 2,
		name: "Our Work",
		children: [
			{
				id: 4,
				name: "sub2",
				link: "/s2",
			},
			{
				id: 5,
				name: "sub2",
				link: "/s2",
			},
		],
	},

	{
		id: 6,
		name: "Our Work",
		children: [
			{
				id: 7,
				name: "sub2",
				link: "/s2",
			},

			{
				id: 8,
				name: "what",
				children: [
					{
						id: 9,
						name: "sub3",
						link: "/s3",
					},

					{
						id: 10,
						name: "sub3",
						link: "/s3",
					},
				],
			},
		],
	},
];
