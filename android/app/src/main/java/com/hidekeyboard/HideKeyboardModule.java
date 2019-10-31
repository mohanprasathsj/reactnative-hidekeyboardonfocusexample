//HideKeyboardModule.java

package com.hidekeyboard;
import android.content.Context;
import android.app.Activity;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.infer.annotation.Assertions;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.view.inputmethod.InputMethodManager;

import java.util.Map;
import java.util.HashMap;

public class HideKeyboardModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    //private final InputMethodManager mInputMethodManager;

    HideKeyboardModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "HideKeyboardExample";
    }

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
}