export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
          name: 'name', 
          type: 'string', 
          title: 'name of product'
      },
      {
          name: 'images', 
          type: 'array', 
          title: 'product images',
          of : [{type: 'image'}]
      },
      {
          name: 'description', 
          type: 'text', 
          title: 'discription of product',
      },
      {
          name: 'slug', 
          type: 'slug', 
          title: 'product slug',
          options: {
              source: 'title',
              maxLength: 96
          }
      },
      {
          name: 'price', 
          type: 'number', 
          title: 'price',
      },
      {
        name: "price_id",
        title : "stripe product ID",
        type: "string",
      },
      {
          name: 'category', 
          type: 'reference', 
          title: 'product category',
          to : [
              {
                  type: 'category'
              }
          ],
          
      }
    ],
  }
  