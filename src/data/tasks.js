/**
 * AI_TASKS — Futuristic wearable AI task dataset
 *
 * Each task represents an AI capability that a 2026-era wearable
 * device could run. The device must decide which tasks to execute
 * locally (on-device) vs. offload to the cloud.
 *
 * Fields:
 *   id               – Unique identifier
 *   name             – Human-readable task name
 *   battery_cost     – Battery percentage consumed when run locally
 *   utility_value    – User-experience benefit score (0-100)
 *   category         – Functional category
 *   icon             – Lucide icon name
 *   latency_priority – How sensitive the task is to network latency
 *   color            – Brand accent color for the task
 *   description      – Brief explanation of the task
 */
export const AI_TASKS = [
  {
    id: 1,
    name: 'Voice Recognition',
    battery_cost: 15,
    utility_value: 85,
    category: 'Communication',
    icon: 'Mic',
    latency_priority: 'High',
    color: '#00f0ff',
    description: 'Real-time speech-to-text and voice command processing',
  },
  {
    id: 2,
    name: 'Real-Time Translation',
    battery_cost: 25,
    utility_value: 75,
    category: 'Communication',
    icon: 'Languages',
    latency_priority: 'Medium',
    color: '#8b5cf6',
    description: 'Instant multi-language translation overlay',
  },
  {
    id: 3,
    name: 'Gesture Tracking',
    battery_cost: 20,
    utility_value: 70,
    category: 'Interaction',
    icon: 'Hand',
    latency_priority: 'High',
    color: '#f59e0b',
    description: '3D hand and body gesture recognition system',
  },
  {
    id: 4,
    name: 'AR Navigation Maps',
    battery_cost: 30,
    utility_value: 90,
    category: 'Navigation',
    icon: 'Map',
    latency_priority: 'Medium',
    color: '#10b981',
    description: 'Augmented reality wayfinding and spatial mapping',
  },
  {
    id: 5,
    name: 'Face Detection',
    battery_cost: 18,
    utility_value: 65,
    category: 'Security',
    icon: 'ScanFace',
    latency_priority: 'High',
    color: '#ef4444',
    description: 'Neural face recognition and identity verification',
  },
  {
    id: 6,
    name: 'Object Detection',
    battery_cost: 22,
    utility_value: 60,
    category: 'Perception',
    icon: 'Box',
    latency_priority: 'Low',
    color: '#3b82f6',
    description: 'Real-time environment object classification',
  },
  {
    id: 7,
    name: 'Heart Rate Monitoring',
    battery_cost: 8,
    utility_value: 95,
    category: 'Health',
    icon: 'HeartPulse',
    latency_priority: 'Critical',
    color: '#ec4899',
    description: 'Continuous vital signs and cardiac rhythm analysis',
  },
  {
    id: 8,
    name: 'Environmental Awareness',
    battery_cost: 12,
    utility_value: 55,
    category: 'Safety',
    icon: 'Thermometer',
    latency_priority: 'Low',
    color: '#06b6d4',
    description: 'Ambient condition sensing and hazard detection',
  },
];
