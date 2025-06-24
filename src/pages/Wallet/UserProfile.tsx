import React from 'react';
import { Copy, Share, RotateCcw, User, ChevronRight } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* User Info */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-sm font-bold text-white">Htn48...NN5</h2>
              <Copy className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <Share className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <RotateCcw className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-xs">Htn48w</span>
              <Copy className="w-3 h-3 text-gray-400 hover:text-white cursor-pointer" />
              <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-[#000000] rounded-[32px] pl-1 w-28" style={{background: 'linear-gradient(92.56deg, rgb(136, 214, 147) 0%, rgb(28, 201, 255) 100%)'}}>
              <span className="text-xs">✗ 绑定Twitter</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg flex items-center space-x-2 transition-colors">
            <span className="text-xs">钱包跟单</span>
          </button>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;