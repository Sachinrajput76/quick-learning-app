// app/video-call/VideoCallPage.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const VideoCallPage: React.FC = () => {
  const dispatch = useDispatch();
  type Teacher = {
    id: string;
    name: string;
    experience: number;
    totalMinutesTaught: number;
    subjects?: { id: string; name: string; level: string }[];
    rating?: { average: number; count: number };
    joinedDate?: string;
    profilePictureUrl?: string; // Add this property
  };
  interface VideoState {
    teacher: Teacher; // Replace `string` with the actual type of `teacher`
    students: string[]; // Replace `string[]` with the actual type of `students`
  }
  interface ReduxTypes {
    video: VideoState;
  }



  // Access Redux state
  const { teacher, students } = useSelector((state: ReduxTypes) => state.video);

  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [connected, setConnected] = useState(false);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  interface Student {
    id: string; // Unique identifier for the student
    name: string; // Name of the student
    profilePictureUrl: string; // URL of the student's profile picture
  }

  useEffect(() => {
    // Dispatch actions to fetch teacher and students data
    // dispatch(fetchTeacher());

    // Request user media (camera and microphone)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error('Failed to get media', err);
      });

    // Cleanup on component unmount
    return () => {
      if (myStream) {
        myStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [dispatch, myStream]);


  function callPeer(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex flex-col h-[87vh]">
      {/* Video Container */}
      <div className="relative flex-grow bg-black">
        {/* Remote Video */}
        {connected && (
          <video
            ref={remoteVideoRef}
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}

        {/* Local Video */}
        {myStream && (
          <div className="absolute bottom-4 right-4 w-40 h-40 border-4 border-white rounded-lg overflow-hidden">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Teacher Info */}
      {teacher && (
        <div className="bg-gray-800 text-white p-4">
          <div className="flex items-center space-x-4">
            <img
              src={teacher.profilePictureUrl || "assets/logo3.jpeg"}
              alt={teacher.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">{teacher.name}</h3>
              <p className="text-sm">
                {teacher.subjects && teacher.subjects.length > 0
                  ? teacher.subjects.map((subj) => subj.name).join(", ")
                  : "No subjects available"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Students Info */}
      <div className="bg-gray-700 text-white p-4">
        <h4 className="text-lg font-semibold">Students</h4>
        <div className="flex space-x-4">
          {(students as unknown as Student[]).map((student: Student, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={student.profilePictureUrl}
                alt={student.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm">{student.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex justify-center bg-gray-800 text-white py-4">
        <button
          onClick={() => callPeer()}
          className="bg-blue-500 px-6 py-3 rounded-full mr-4 hover:bg-blue-600 transition"
        >
          Connect
        </button>
        <button
          onClick={() => setConnected(false)}
          className="bg-red-500 px-6 py-3 rounded-full hover:bg-red-600 transition"
        >
          End Call
        </button>
      </div>
    </div>
  );
};

export default VideoCallPage;
