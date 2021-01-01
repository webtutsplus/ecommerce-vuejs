import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import Category from '../views/Category/Category.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Product routes
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/product/edit/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  //Category routes
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/category/update/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
