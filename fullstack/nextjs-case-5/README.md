# Full Stack Middle Developer Case Study #5

## Overview
You are required to create a **multi-step property form** and a final **portfolio overview** using the following tech stack:
- **Next.js (App Router)**
- **TypeScript**
- **Prisma + PostgreSQL** (database hosted on Vercel)
- **React Query** (mandatory for data fetching and mutations)
- **React Hook Form + Zod** (mandatory for form handling and validation)
- **TailwindCSS**
- **Shadcn UI** components

## Project Requirements
1. **Property Details**  
   - Basic fields (name, address, etc.) using **React Hook Form** and **Zod** for validation.

2. **Rent Roll**  
   - Display or seed tenant/unit data (pagination optional).

3. **Financing**  
   - One default “Debt 1” form.
   - A button to add up to 10 additional debts, each in a new tab.

4. **Income & Expenses**  
   - **No tabs** on this step.
   - Real-time calculations for:
     - (EGI) **Effective Gross Income**
     - **Total Expenses**
     - **Net Operating Income (NOI)**

5. **Ownership Structure**  
   - Three default owners (Name + Ownership %).
   - A button to add more owners as needed.

After completing all steps, the user should see an **Overview** page listing all properties with calculated metrics (e.g., Asset Value, LTV, DSCR). A [Figma design](#) (link or screenshots) is provided for **reference only**; exact pixel matching is **not** required.

### Key Calculations
1. **EGI** = Net Rental + Retail Income + Insurance Income + Misc Additional Income  
2. **Total Expenses** = sum of property taxes, insurance, utilities, etc.  
3. **NOI** = EGI − Total Expenses  
4. **Asset Value** = NOI ÷ Cap Rate (e.g., 5%)  
5. **LTV** = (Total Debt ÷ Asset Value) × 100%  
6. **DSCR** = NOI ÷ Annual Debt Service  
7. **Rent per sqft** = Net Rental ÷ Total Square Footage  
8. **Expense Ratio** = (Total Expenses ÷ EGI) × 100%

## Development & Deployment
1. **Initialize** a new Next.js (App Router) + TypeScript project.
2. **Implement** Prisma, connecting to a **Vercel-hosted PostgreSQL** database.  
3. **Use** React Hook Form + Zod for form handling and validation.  
4. **Leverage** React Query for data fetching and mutations.  
5. **Deploy** to Vercel with the correct `DATABASE_URL` in the project’s environment settings.

## Submission
1. **Deployed Application URL** on Vercel (production environment).  
2. **Git Repository** link (public or private invite).  
3. **Time Expectation**: ~6 hours total. No extensive documentation is required.

## Evaluation Criteria
- **Code Organization & Quality** (TypeScript best practices, project structure)  
- **Functional Completeness** (all steps, real-time calculations, final overview)  
- **Database & API Integration** (Prisma + PostgreSQL on Vercel, React Query usage)  
- **UI/UX** (usage of Shadcn components, coherent flow; not pixel-perfect)  
- **Deployment** (fully functional on Vercel, database properly connected)

---

**Thank you for your participation.** If you have any questions or encounter technical issues, please contact us. We look forward to reviewing your submission!
