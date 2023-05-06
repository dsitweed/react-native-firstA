# Những khó khăn phặp phải
1. Lỗi đường dẫn tới ảnh
- Tạo file react-app-env.d.ts
- Thêm 
```
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
```
2. Install styled-components
```
npm install styled-components
npm install --save-dev @types/styled-components @types/styled-components-react-native

```
3. Install react navigation cho react native
```
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
<!-- Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.-->
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
```