'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect to login if no token found
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center' }}>
        {/* Success Check Mark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{
            width: '100px',
            height: '100px',
            margin: '0 auto 30px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '50px'
          }}
        >
          ✓
        </motion.div>

        {/* Success Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '16px'
          }}
        >
          Successfully Logged In!
        </motion.h1>

        {/* Animated Confetti */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: ['#ff0080', '#7928ca', '#00ff00', '#0070f3', '#ff4000'][i % 5],
            }}
            initial={{
              opacity: 0,
              y: 0,
              x: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, Math.random() * -800],
              x: [0, (Math.random() - 0.5) * 1000],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.02,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '0 auto'
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              color: '#666',
              fontSize: '16px',
              marginBottom: '20px'
            }}
          >
            Welcome to your dashboard! 🎉
          </motion.p>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onClick={() => router.push('/')}
          >
            Go to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 