

Token Generator App: 

The Token Generator App is a simple React application developed to generate blue and red tokens based on user input. Users can specify the number of tokens, their prefixes, and how many tokens should be displayed per row. The app displays the generated tokens in a visually organized manner.

Features:

1. Generate blue or red or both tokens with customizable prefixes.
2. Define the number of tokens per row for better layout control.
3. Clear all fields and generated tokens with a single button click.
4. Responsive design suitable for different screen sizes.

Libraries Used: 

1. React + vite
2. Tailwind CSS
3. Formik

Edge Cases handled: 

1. User can generate either blue or red or both tokens based on their need
2. If user entered any one field in any one(blue or red) type of token, then it is mandatory to fill other two field's in that token fields
3. Using Conditional rendering we will show only blue or red or both based on user entered values