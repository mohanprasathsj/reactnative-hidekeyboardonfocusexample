# React Native Hide Keyboard Example
Recently faced issue on Hiding Keyboard when an TextEdit is on focus. React Native does not support this feature. So this application is an example of how to achieve it

>Note: We have **not fixed the keyboard showing for couple of seconds in this solution**. For my requirement showing the keyboard just for a moment is totally ok

I have followed the following link in adding the Native Modules to the application. 

https://facebook.github.io/react-native/docs/native-modules-ios

Following are the changes that I did for the keyboard hide to work

1. Added the Native Module HideKeyboardModule (android\app\src\main\java\com\hidekeyboard)
```jsx
 @ReactMethod
    public void hideSoftKeyBoard() {
        Activity activity = getCurrentActivity();
        View view = activity.getCurrentFocus();
        //Toast.makeText(getReactApplicationContext(), message, duration).show();
        InputMethodManager mInputMethodManager =
        (InputMethodManager)
            Assertions.assertNotNull(getReactApplicationContext().getSystemService(Context.INPUT_METHOD_SERVICE));
        mInputMethodManager.hideSoftInputFromWindow(view.getWindowToken(), 0);
        
    }
```
2. Added the Native Package HideKeyBoardPackage  (android\app\src\main\java\com\hidekeyboard)
```jsx
@Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new HideKeyboardModule(reactContext));

    return modules;
  }
 ```
3. Added the package in MainApplication (android\app\src\main\java\com\hidekeyboard)
```jsx
  @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          packages.add(new HideKeyBoardPackage());
          return packages;
        }
 ```
 
 4. Added the HideKeyBoardExample.js in the root directory
 ```jsx
 import {NativeModules} from 'react-native';
module.exports = NativeModules.HideKeyboardExample;
 ```
 
 5. Called the Module in the App.js
  ```jsx
 import HideKeyboardExample from './HideKeyBoardExample'
 
 
 ...
   _onFocus = () => {
    console.log("On Focus")
    HideKeyboardExample.hideSoftKeyBoard();
  }
  
  ...
 <TextInput
      autoFocus={true}
        multiline
        value={this.state.hiddenInput}
        onChangeText={this._onChangeText}
        onFocus={this._onFocus}
    />
 ```
