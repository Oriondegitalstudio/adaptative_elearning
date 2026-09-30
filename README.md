# Adaptive E-Learning — Frontend

Frontend application for the **Adaptive E-Learning Platform**, built with Angular and designed to support learners from **primary school through lycée (6–18 years old)**.

The frontend follows a **Clean Architecture + Feature-First architecture**, designed for scalability, maintainability, testability, and clear separation of responsibilities.

---

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Architecture](#2-architecture)
- [3. Project Structure](#3-project-structure)
- [4. Architectural Layers](#4-architectural-layers)
  - [4.1 Core](#41-core)
  - [4.2 Shared](#42-shared)
  - [4.3 Features](#43-features)
  - [4.4 Data Layer](#44-data-layer)
  - [4.5 Domain Layer](#45-domain-layer)
  - [4.6 Presentation Layer](#46-presentation-layer)
- [5. Feature Structure](#5-feature-structure)
- [6. Dependency Rules](#6-dependency-rules)
- [7. Data Flow](#7-data-flow)
- [8. State Management](#8-state-management)
- [9. Routing](#9-routing)
- [10. Authentication and Authorization](#10-authentication-and-authorization)
- [11. API Communication](#11-api-communication)
- [12. Models and Entities](#12-models-and-entities)
- [13. Repository Pattern](#13-repository-pattern)
- [14. Use Cases](#14-use-cases)
- [15. Components](#15-components)
- [16. Shared Components](#16-shared-components)
- [17. Forms](#17-forms)
- [18. Error Handling](#18-error-handling)
- [19. Loading and UI States](#19-loading-and-ui-states)
- [20. Internationalization](#20-internationalization)
- [21. Responsive Architecture](#21-responsive-architecture)
- [22. Accessibility](#22-accessibility)
- [23. Testing Architecture](#23-testing-architecture)
- [24. Naming Conventions](#24-naming-conventions)
- [25. Code Quality Rules](#25-code-quality-rules)
- [26. Scalability Rules](#26-scalability-rules)
- [27. Target Architecture](#27-target-architecture)

---

# 1. Project Overview

Adaptive E-Learning is an educational platform designed around the learning journey of students aged **6–18**.

The frontend is responsible for:

- Student experiences
- Learning experiences
- Course discovery
- Lessons
- Assessments
- Progress tracking
- Personalized learning experiences
- User profiles
- Authentication
- Educational dashboards
- Platform navigation
- Communication with backend services

The frontend must remain independent from backend implementation details.

---

# 2. Architecture

The application uses:

> **Clean Architecture + Feature-First Architecture**

The main architectural principles are:

- Separation of concerns
- Dependency inversion
- Feature isolation
- Strong typing
- Reusability
- Testability
- Maintainability
- Scalability

The architecture is divided into:

```text
                    Angular Application
                           │
             ┌─────────────┴─────────────┐
             │                           │
            Core                       Shared
             │                           │
             └─────────────┬─────────────┘
                           │
                        Features
                           │
             ┌─────────────┼─────────────┐
             │             │             │
           Auth         Courses       Learning
             │             │             │
       Presentation   Presentation   Presentation
             │             │             │
          Domain        Domain        Domain
             │             │             │
           Data          Data          Data
             │             │             │
             └─────────────┼─────────────┘
                           │
                       Backend API