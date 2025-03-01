import React from 'react';
import { Bell, Brain, Cpu, Database, FileText, GitBranch, LineChart, RefreshCw, Shield, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 border-b border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-500" />
              <h1 className="text-xl font-bold">NeuroStack Architect</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-700">
                <Bell className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="font-medium text-sm">NS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-indigo-400" />
                System Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Academic Integration</span>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-gray-400 text-sm">Journals Monitored</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">API Health</span>
                    <span className="text-green-400 text-sm">98.7%</span>
                  </div>
                  <div className="text-2xl font-bold">132</div>
                  <div className="text-gray-400 text-sm">APIs Monitored</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Cognitive Load</span>
                    <span className="text-yellow-400 text-sm">Moderate</span>
                  </div>
                  <div className="text-2xl font-bold">12.4</div>
                  <div className="text-gray-400 text-sm">Average Complexity</div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <LineChart className="h-5 w-5 mr-2 text-indigo-400" />
                Innovation Tracking
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-left text-gray-400">Area</th>
                      <th className="py-3 px-4 text-left text-gray-400">Current Standard</th>
                      <th className="py-3 px-4 text-left text-gray-400">Emerging Tech</th>
                      <th className="py-3 px-4 text-left text-gray-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Accessibility</td>
                      <td className="py-3 px-4">WCAG 2.2</td>
                      <td className="py-3 px-4">W3C Silver (draft)</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">Prototype</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">ML Models</td>
                      <td className="py-3 px-4">GPT-4</td>
                      <td className="py-3 px-4">Mistral Neuro</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-purple-900 text-purple-300 rounded text-xs">Fine-tune</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Security</td>
                      <td className="py-3 px-4">OAuth2.0</td>
                      <td className="py-3 px-4">Passkey/FIDO2</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">Implement</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Testing</td>
                      <td className="py-3 px-4">Jest/Cypress</td>
                      <td className="py-3 px-4">Playwright + Neurofuzz</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs">Add</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-indigo-400" />
                Self-Healing Status
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span>Infrastructure</span>
                  </div>
                  <span className="text-gray-400">Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span>Dependencies</span>
                  </div>
                  <span className="text-gray-400">Up to date</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2"></div>
                    <span>Security</span>
                  </div>
                  <span className="text-gray-400">2 warnings</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span>Performance</span>
                  </div>
                  <span className="text-gray-400">Optimized</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="w-full py-2 flex items-center justify-center text-indigo-400 hover:text-indigo-300">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Run diagnostics
                </button>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-indigo-400" />
                Tech Stack Components
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                    <span>Rust</span>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">v1.75.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-blue-400" />
                    <span>TypeScript</span>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">v5.5.3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-400" />
                    <span>Python</span>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">v3.12.2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-purple-400" />
                    <span>TensorFlow</span>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">v2.15.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-red-400" />
                    <span>React Aria</span>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">v3.30.0</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="w-full py-2 flex items-center justify-center text-indigo-400 hover:text-indigo-300">
                  <GitBranch className="h-4 w-4 mr-2" />
                  View all dependencies
                </button>
              </div>
            </section>
          </div>
        </div>

        <section className="mt-8 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-indigo-400" />
            Latest Research Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Adaptive UI Patterns for ADHD</h3>
              <p className="text-gray-300 mb-3">New research from MIT suggests that reducing animation duration by 15% improves focus for users with ADHD.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Journal of Accessibility, June 2024</span>
                <button className="text-indigo-400 text-sm hover:text-indigo-300">Implement</button>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Cognitive Load Reduction Techniques</h3>
              <p className="text-gray-300 mb-3">Stanford research demonstrates 27% improvement in task completion using progressive disclosure patterns.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Frontiers in Psychology, May 2024</span>
                <button className="text-indigo-400 text-sm hover:text-indigo-300">Implement</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;