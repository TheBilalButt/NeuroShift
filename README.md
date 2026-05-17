Website Link : https://neuroshift.netlify.app/  
````markdown
# NeuroShift

Adaptive AI Task Orchestration for Energy Optimized Wearable Systems

NeuroShift is a web based project for the Design and Analysis of Algorithms course. It uses the 0/1 Knapsack Dynamic Programming algorithm to decide which AI tasks should run locally on a wearable device and which tasks should shift to the cloud.

The main goal is to save battery while keeping the user experience smooth.

## Project Overview

Modern AI wearable devices like smart glasses and smartwatches run many AI tasks at the same time, such as voice recognition, translation, face detection, navigation, gesture control, and object detection.

Running all tasks locally can drain battery very fast.

NeuroShift solves this problem by selecting the best set of tasks to run locally within the current battery limit. Tasks that are not selected are shifted to the cloud.

## Problem Statement

AI wearable devices have limited battery capacity. If every AI task runs on the device, battery usage becomes very high.

The challenge is to choose the most important tasks for local execution while staying within the available battery capacity.

## Solution

NeuroShift uses the 0/1 Knapsack algorithm.

The system treats:

| Knapsack Concept | NeuroShift Mapping |
|---|---|
| Capacity | Remaining battery percentage |
| Items | AI tasks |
| Weight | Battery cost of each task |
| Value | Importance of each task |
| Selected items | Tasks running locally |
| Not selected items | Tasks shifted to cloud |

## Core Algorithm

Algorithm used:

```text
0/1 Knapsack using Dynamic Programming
````

The algorithm checks all possible task combinations and selects the one that gives the highest total importance value without exceeding the current battery capacity.

## Complexity Analysis

| Type             | Complexity |
| ---------------- | ---------- |
| Time Complexity  | O(n × W)   |
| Space Complexity | O(n × W)   |

Where:

```text
n = number of AI tasks
W = battery capacity
```

## Features

1. Battery slider to set current battery level
2. AI task cards with battery cost and importance value
3. Optimize button to run the algorithm
4. Local task selection using Dynamic Programming
5. Cloud task separation
6. Battery usage analytics
7. Battery life comparison
8. Clean and modern dashboard
9. Responsive user interface
10. Simple algorithm visualization

## Example Tasks

| Task              | Battery Cost | Importance |
| ----------------- | -----------: | ---------: |
| Voice Recognition |           15 |          9 |
| Live Translation  |           25 |          7 |
| Face Detection    |           40 |          6 |
| Navigation        |           10 |          8 |
| Gesture Control   |           20 |          5 |
| Object Detection  |           35 |          8 |

For a battery capacity of 50 percent, the system may select:

| Local Tasks       | Battery Used | Value |
| ----------------- | -----------: | ----: |
| Voice Recognition |           15 |     9 |
| Navigation        |           10 |     8 |
| Gesture Control   |           20 |     5 |

Total battery used:

```text
45 percent
```

Total value:

```text
22
```

Remaining tasks are shifted to the cloud.

## System Architecture

```text
User Interface
      ↓
Frontend Dashboard
      ↓
Backend API
      ↓
Knapsack Algorithm Engine
      ↓
Optimized Local and Cloud Task Output
```

## Technology Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Frontend   | React                   |
| Styling    | Tailwind CSS            |
| Animation  | Framer Motion           |
| Charts     | Recharts or Chart.js    |
| Backend    | Python FastAPI or Flask |
| Algorithm  | Dynamic Programming     |
| Deployment | Vercel, Render, Railway |

## Main Workflow

1. User opens the NeuroShift dashboard
2. User sets current battery capacity
3. User enables or disables AI tasks
4. User clicks Optimize
5. Backend runs the Knapsack algorithm
6. System selects local tasks
7. Remaining tasks are shifted to cloud
8. Dashboard shows results and analytics

## API Design

Endpoint:

```text
POST /api/optimize
```

Sample request:

```json
{
  "battery_capacity": 50,
  "tasks": [
    {
      "id": 1,
      "name": "Voice Recognition",
      "battery_cost": 15,
      "value": 9,
      "category": "audio"
    },
    {
      "id": 2,
      "name": "Live Translation",
      "battery_cost": 25,
      "value": 7,
      "category": "language"
    }
  ]
}
```

Sample response:

```json
{
  "local_tasks": [
    {
      "id": 1,
      "name": "Voice Recognition",
      "battery_cost": 15,
      "value": 9
    }
  ],
  "cloud_tasks": [
    {
      "id": 2,
      "name": "Live Translation",
      "battery_cost": 25,
      "value": 7
    }
  ],
  "total_battery_used": 15,
  "total_value": 9,
  "battery_remaining": 35
}
```

## Algorithm Logic

```python
def knapsack_optimize(battery_capacity, tasks):
    n = len(tasks)

    dp = [[0] * (battery_capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        cost = tasks[i - 1]["battery_cost"]
        value = tasks[i - 1]["value"]

        for w in range(battery_capacity + 1):
            if cost <= w:
                dp[i][w] = max(
                    dp[i - 1][w],
                    dp[i - 1][w - cost] + value
                )
            else:
                dp[i][w] = dp[i - 1][w]

    selected_local = []
    w = battery_capacity

    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            selected_local.append(tasks[i - 1])
            w -= tasks[i - 1]["battery_cost"]

    cloud_tasks = [task for task in tasks if task not in selected_local]

    total_battery_used = sum(task["battery_cost"] for task in selected_local)

    return {
        "local_tasks": selected_local,
        "cloud_tasks": cloud_tasks,
        "total_battery_used": total_battery_used,
        "total_value": dp[n][battery_capacity],
        "battery_remaining": battery_capacity - total_battery_used
    }
```

## Project Structure

```text
neuroshift
  frontend
    src
      components
        BatterySlider.jsx
        TaskCard.jsx
        OptimizeButton.jsx
        ResultPanel.jsx
        BatteryChart.jsx
        ComparisonTable.jsx
      pages
        Dashboard.jsx
        AlgoVisualization.jsx
      App.jsx
      index.js
    package.json

  backend
    app.py
    knapsack.py
    requirements.txt

  README.md
```

## How to Run

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install fastapi uvicorn
python app.py
```

## DAA Concepts Used

| Concept             | Usage                                    |
| ------------------- | ---------------------------------------- |
| Dynamic Programming | Used to solve 0/1 Knapsack               |
| Optimization        | Selects best local task combination      |
| Time Complexity     | Analyzed as O(n × W)                     |
| Space Complexity    | Analyzed as O(n × W)                     |
| Backtracking        | Used to find selected tasks              |
| Constraint Handling | Battery capacity works as the main limit |

## Results

NeuroShift improves battery usage by avoiding unnecessary local execution of all AI tasks.

Instead of running every AI task on the device, it runs only the most valuable tasks locally and shifts the rest to cloud.

Expected result:

| Metric          | Without NeuroShift | With NeuroShift             |
| --------------- | ------------------ | --------------------------- |
| Battery Life    | Around 30 minutes  | Around 150 minutes          |
| Task Execution  | All local          | Smart local and cloud split |
| Battery Usage   | Very high          | Optimized                   |
| User Experience | Laggy              | Smooth                      |

## Future Scope

1. Integration with real wearable devices
2. Real time sensor based task values
3. Machine learning based importance prediction
4. Multi device task sharing
5. More advanced energy models

## Team Members

| Name          | Registration Number |
| ------------- | ------------------- |
| Bilal Butt    | FA23 BAI 042        |
| Atif Ali Shah | FA23 BAI 004        |
| Afnan Khan    | FA23 BAI 028        |
| Azeen Khan    | FA23 BAI 012        |

## Course Information

| Field           | Detail                                   |
| --------------- | ---------------------------------------- |
| Course          | Design and Analysis of Algorithms        |
| Program         | BS Artificial Intelligence               |
| Semester        | 6th Semester                             |
| University      | COMSATS University Islamabad, Wah Campus |
| Submitted To    | Dr. Kashif Ayyub                         |
| Submission Date | 18th May 2026                            |

## Conclusion

NeuroShift shows how a classical DAA algorithm can solve a modern wearable AI battery problem.

By using 0/1 Knapsack Dynamic Programming, the system makes an optimal decision about which AI tasks should run locally and which should shift to the cloud. This helps save battery, improve performance, and keep important features available to the user.

```
```
