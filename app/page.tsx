"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "40px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3,
              }}
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 20px",
                backgroundColor: "#4f46e5",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              S
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              Welcome to Simple UI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                color: "#666",
                fontSize: "14px",
              }}
            >
              Please choose an option to continue
            </motion.p>
          </motion.div>

          <div style={{ marginBottom: "20px" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/login"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#4f46e5",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textAlign: "center",
                  textDecoration: "none",
                  marginBottom: "12px",
                }}
              >
                Sign In
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/register"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "white",
                  color: "#4f46e5",
                  border: "1px solid #4f46e5",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Create Account
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: "12px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#4f46e5",
                    marginBottom: "4px",
                  }}
                >
                  Secure
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#666",
                  }}
                >
                  End-to-end encryption
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: "12px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#4f46e5",
                    marginBottom: "4px",
                  }}
                >
                  Fast
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#666",
                  }}
                >
                  Quick access
                </div>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                fontSize: "12px",
                color: "#666",
              }}
            >
              By continuing, you agree to our Terms of Service
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
