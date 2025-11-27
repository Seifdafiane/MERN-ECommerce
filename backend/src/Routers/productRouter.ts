
import express from 'express';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/productModel';

export const productRouter = express.Router();

// ✅ Récupérer tous les produits
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
  })
);

// ✅ Récupérer un produit par slug
productRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product Not Found' });
    }
  })
);

// ✅ Nouvelle route pour récupérer les catégories
productRouter.get(
  '/categories',
  asyncHandler(async (req, res) => {
    try {
      const categories = await ProductModel.distinct('category'); // Récupère les catégories uniques
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error });
    }
  })
);

