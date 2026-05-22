import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, BookOpen, GraduationCap, CheckCircle2, Loader2 } from 'lucide-react';

const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    mobileNumber: '',
    branch: '',
    standard: '',
    package: '',
  });

  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isCaptchaVerifying, setIsCaptchaVerifying] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        studentName: '',
        mobileNumber: '',
        branch: '',
        standard: '',
        package: '',
      });
      setIsCaptchaChecked(false);
      setIsCaptchaVerifying(false);
      setFormErrors({});
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const branches = [
    'Hyderabad',
    'Bangalore',
    'Ahmedabad',
    'Pune',
    'Nagpur',
    'Surat',
    'Rajkot',
    'Navi Mumbai',
    'Solapur',
    'Vijayawada',
    'Jadcherla',
    'Gulbarga',
    'Bidar',
    'Secunderabad'
  ];

  const standards = [
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
    'Class 11 (Science)', 'Class 11 (Commerce)',
    'Class 12 (Science)', 'Class 12 (Commerce)'
  ];

  const packages = [
    'Day School',
    'Day Boarding',
    'Residential Boarding'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCaptchaClick = () => {
    if (isCaptchaChecked || isCaptchaVerifying) return;
    
    setIsCaptchaVerifying(true);
    setTimeout(() => {
      setIsCaptchaVerifying(false);
      setIsCaptchaChecked(true);
      if (formErrors.captcha) {
        setFormErrors(prev => ({ ...prev, captcha: '' }));
      }
    }, 1200);
  };

  const validate = () => {
    const errors = {};
    if (!formData.studentName.trim()) {
      errors.studentName = 'Child name is required';
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      errors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.branch) {
      errors.branch = 'Please select a branch';
    }
    if (!formData.standard) {
      errors.standard = 'Please select a standard';
    }
    if (!formData.package) {
      errors.package = 'Please select a package';
    }
    if (!isCaptchaChecked) {
      errors.captcha = 'Please verify you are not a robot';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        alert(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Failed to submit application:', err);
      alert('Network error. Failed to reach local API.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#f0f2f5] rounded-2xl shadow-2xl overflow-hidden border border-white/20 z-10"
          >
            {/* Header close X button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 hover:bg-white/40 rounded-full transition z-20 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center p-8 lg:p-12 space-y-6"
              >
                <div className="w-20 h-20 bg-green-50 flex items-center justify-center rounded-full text-green-600 shadow-inner">
                  <CheckCircle2 size={48} className="animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800 font-serif">Application Submitted!</h3>
                  <p className="text-gray-600 max-w-sm">
                    Thank you for booking a campus visit for <strong className="text-[#90191b]">{formData.studentName}</strong>. Our counselors will reach out to you shortly at <span className="font-semibold">{formData.mobileNumber}</span>.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-[#90191b] hover:bg-[#b02326] text-white font-bold rounded-lg transition shadow-md hover:shadow-lg cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              /* Admission Form State */
              <div className="p-6 lg:p-8 space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 font-serif tracking-tight">
                    Book a campus visit today
                  </h2>
                  <p className="text-sm font-bold text-gray-500 tracking-wide uppercase">
                    Only for Boy Child
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Name */}
                  <div className="space-y-1 relative">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block">Child Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter Child's Full Name"
                        className={`w-full pl-11 pr-4 py-3 bg-white border ${formErrors.studentName ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90191b] transition shadow-sm text-sm`}
                      />
                    </div>
                    {formErrors.studentName && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.studentName}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1 relative">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block">Mobile*</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter 10-Digit Mobile Number"
                        className={`w-full pl-11 pr-4 py-3 bg-white border ${formErrors.mobileNumber ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90191b] transition shadow-sm text-sm`}
                      />
                    </div>
                    {formErrors.mobileNumber && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.mobileNumber}</p>
                    )}
                  </div>

                  {/* Select Branch */}
                  <div className="space-y-1 relative">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block">Select Branch</label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 bg-white border ${formErrors.branch ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90191b] transition shadow-sm text-sm appearance-none cursor-pointer`}
                      >
                        <option value="">Select Nearest Campus / Branch</option>
                        {branches.map(branch => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>
                    {formErrors.branch && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.branch}</p>
                    )}
                  </div>

                  {/* Select Standard */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 relative">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block">Select Standard</label>
                      <div className="relative">
                        <GraduationCap size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                          name="standard"
                          value={formData.standard}
                          onChange={handleChange}
                          className={`w-full pl-11 pr-4 py-3 bg-white border ${formErrors.standard ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90191b] transition shadow-sm text-sm appearance-none cursor-pointer`}
                        >
                          <option value="">Standard</option>
                          {standards.map(std => (
                            <option key={std} value={std}>{std}</option>
                          ))}
                        </select>
                      </div>
                      {formErrors.standard && (
                        <p className="text-xs text-red-500 font-medium">{formErrors.standard}</p>
                      )}
                    </div>

                    {/* Select Package */}
                    <div className="space-y-1 relative">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block">Select Package</label>
                      <div className="relative">
                        <BookOpen size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                          name="package"
                          value={formData.package}
                          onChange={handleChange}
                          className={`w-full pl-11 pr-4 py-3 bg-white border ${formErrors.package ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90191b] transition shadow-sm text-sm appearance-none cursor-pointer`}
                        >
                          <option value="">Package</option>
                          {packages.map(pkg => (
                            <option key={pkg} value={pkg}>{pkg}</option>
                          ))}
                        </select>
                      </div>
                      {formErrors.package && (
                        <p className="text-xs text-red-500 font-medium">{formErrors.package}</p>
                      )}
                    </div>
                  </div>

                  {/* Mock reCAPTCHA */}
                  <div className={`flex items-center justify-between p-3.5 bg-white border ${formErrors.captcha ? 'border-red-500' : 'border-gray-200'} rounded-lg shadow-sm mt-2`}>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={handleCaptchaClick}
                        className={`w-6 h-6 flex items-center justify-center border-2 rounded transition cursor-pointer ${isCaptchaChecked ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 hover:border-gray-400 bg-white'}`}
                      >
                        {isCaptchaVerifying ? (
                          <Loader2 size={14} className="animate-spin text-[#90191b]" />
                        ) : isCaptchaChecked ? (
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        ) : null}
                      </button>
                      <span className="text-xs font-semibold text-gray-700">I'm not a robot</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-8 h-8 opacity-80"
                      />
                      <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest leading-none mt-1">reCAPTCHA</span>
                    </div>
                  </div>
                  {formErrors.captcha && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.captcha}</p>
                  )}

                  {/* Apply Now Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-3.5 bg-[#cc0000] hover:bg-[#e60000] text-white font-bold text-base rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <span>Apply Now</span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
