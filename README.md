Some important commands example to link packages

# Add w3css-text dependency into w3cc

lerna add @devk/w3css-text --scope=@devk/w3css

# We are going to use React for the two UI components, let's add it as dev dependency first for local testing

lerna add react --dev --scope=@devk/w3css-text

lerna add react-dom --dev --scope=@devk/w3css-text

# And as a peer dependency using major 16 version for consuming applications

lerna add react@17.x --peer --scope=@devk/w3css-text
