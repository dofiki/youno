const data = {
  name: "root",
  description: "Root folder",
  children: [
    {
      name: "Sports",
      description: "Sports related content",
      children: [
        {
          name: "Football",
          description: "Football related content",
          children: [],
        },
         {
          name: "Cricket",
          description: "Cricket related content",
          children: [],
        }
      ],
    },
    {
        name: "Maths",
        description: "Maths related content",
        children: [
            {
                name:"Calculus",
                description:"Calculus related content",
                children:[

                ]
            }
        ]
    }
  ],
};

export default data;