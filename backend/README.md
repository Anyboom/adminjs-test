# AdminJS@7 + Prisma + NestJS@11 (CommonJS)

This project demonstrates how to integrate **AdminJS v7** with **Prisma** in a **NestJS v11** application while maintaining **CommonJS (CJS)** support (without switching to ESM).

## 🚀 Getting Started

Follow these steps to set up and run the project:

### 1️⃣ Install Dependencies
```sh
pnpm i
```

### 2️⃣ Generate Prisma Client
```sh
npx prisma generate
```

### 3️⃣ Run Database Migrations
```sh
npx prisma migrate dev --name init
```

### 4️⃣ Start the Application
```sh
pnpm run start
```

## 📦 Project Structure
```
📂 src
├── adminjs
│   ├── index.ts                 # Create AdminJS instance
│   ├── prisma
│   │   ├── models
│   │   │   ├── CResource.ts      # Prisma resource model
│   │   │   ├── CResourceBuilder.ts  # Utility to register Prisma models in AdminJS
│   │   ├── crud.service.ts       # CRUD service for Prisma integration
│   │   ├── prisma.service.ts     # Prisma service for database access
├── app.module.ts                 # Main NestJS module
└── main.ts                       # Application entry point
```

## 🔧 Key Features
- **AdminJS v7 integration** with Prisma and NestJS
- **CommonJS (CJS) compatibility** (avoiding ESM migration)
- **Dynamic resource registration** using Prisma models
- **Modular structure** for scalability

## 🛠 Configuration
Make sure to configure your **`.env`** file with database connection settings before running migrations.

Example:
```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

## ⚠️ Important Version Note
For compatibility reasons, **`@nestjs/platform-express` must remain at version `^10.4.15`**, as the latest v11 version does not work properly with this setup.

## 📖 Additional Notes
- The project uses `dynamicImport()` to avoid ESM-related issues.
- AdminJS resources are dynamically registered using `CResourceBuilder`.
- Prisma must be generated **before** running the application.

## 📜 License
This project is open-source and available under the **MIT License**.

---

Happy coding! 🚀