# 

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
4. react-native-reanimated-bottom-sheet

Thành phần kéo trượt lên xuống giống kiểu iphone hay các diện thoại hiện đại ngày nay
[Link Git](https://github.com/osdnk/react-native-reanimated-bottom-sheet)
```
npm install reanimated-bottom-sheet &&
expo install react-native-gesture-handler react-native-reanimated
```

Thêm config trong file babel.config.js



# Tài liệu tham khảo
[Link youtube](https://www.youtube.com/watch?v=68l7wyHw97Y)