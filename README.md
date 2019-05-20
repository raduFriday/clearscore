# STEPS TO RUN THE WEB-APP LOCALLY

## STEP 1
Go to to the root directory of the web app and run:
yarn install

## STEP 2
After installing run:
yarn start


# IMPLEMENTED FEATURES
1. Page should be fully responsive.
2. Each idea tile should contain a title and description, which is editable, as well as created/updated time.
3. New ideas should have the title field focused to prompt user to begin typing.
4. Add a character countdown as the user is approaching the limit of their description text.
5. Utilise the localStorage API to persist current state when the page is refreshed. Add clear ideas button that removes all idea cards



# OUTSTANDING FEATURES
1. Add the ability to sort ideas by creation date or alphabetically.
2. Add an unobtrusive notification when an update is made to a tile - this became unnecessary as the state gets updated after each key stroke.
3. Unit tests and SCSS not implemented - lack of time.