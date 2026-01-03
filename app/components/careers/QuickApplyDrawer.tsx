"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Briefcase,
  Mail,
  User,
  Calendar,
  FileText,
  Send,
  Loader2,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  DollarSign,
} from "lucide-react";

interface QuickApplyProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
  jobDepartment?: string;
}

export function QuickApplyDrawer({ isOpen, onClose, jobTitle, jobId, jobDepartment }: QuickApplyProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    noticePeriod: "",
    salaryExpectation: "",
    maxSalaryExpectation: "",
    currentSalary: "",
    message: ""
  });
  const [showSalary, setShowSalary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          jobId,
          jobTitle,
          jobDepartment
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          portfolio: "",
          linkedin: "",
          noticePeriod: "",
          salaryExpectation: "",
          maxSalaryExpectation: "",
          currentSalary: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute left-0 top-0 w-full max-w-md h-full bg-gradient-to-br from-[#0B0E14] to-[#0d1b24] border-r border-white/20 shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">Quick Apply</h2>
                    <p className="text-sm text-muted-foreground">{jobTitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest in the {jobTitle} position. We will review your application and get back to you soon.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-500 text-white rounded-lg font-medium"
                    >
                      Close
                    </button>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-500/50">
                      <AlertCircle className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Submission Failed</h3>
                    <p className="text-muted-foreground mb-4">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-500 text-white rounded-lg font-medium"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-white">Personal Information</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-4 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Info */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-white">Professional Information</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Portfolio Link
                          </label>
                          <div className="relative">
                            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="url"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                              placeholder="https://yourportfolio.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            LinkedIn Profile
                          </label>
                          <div className="relative">
                            <input
                              type="url"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleChange}
                              className="w-full pl-4 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                              placeholder="https://linkedin.com/in/yourname"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Notice Period *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <select
                              name="noticePeriod"
                              value={formData.noticePeriod}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none"
                            >
                              <option value="">Select notice period</option>
                              <option value="Immediate">Immediate</option>
                              <option value="1 week">1 week</option>
                              <option value="2 weeks">2 weeks</option>
                              <option value="1 month">1 month</option>
                              <option value="2 months">2 months</option>
                              <option value="3+ months">3+ months</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Current Salary
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="text"
                              name="currentSalary"
                              value={formData.currentSalary || ""}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                              placeholder="$80,000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Salary Expectation */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-white">
                          Salary Expectation *
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowSalary(!showSalary)}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                        >
                          {showSalary ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          {showSalary ? "Hide" : "Show"} Salary
                        </button>
                      </div>
                      
                      {showSalary && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">
                              Minimum Expected
                            </label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <input
                                type="text"
                                name="salaryExpectation"
                                value={formData.salaryExpectation}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                placeholder="$90,000"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">
                              Maximum Expected
                            </label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <input
                                type="text"
                                name="maxSalaryExpectation"
                                value={formData.maxSalaryExpectation || ""}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                placeholder="$120,000"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-white">
                        Cover Letter / Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-white/20">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-yellow-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Application
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        By submitting, you agree to our privacy policy and terms of service.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
