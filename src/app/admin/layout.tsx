'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Building2,
  FileText,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  { label: 'Applicants', href: '/admin/applicants', icon: Users },
  { label: 'Employers', href: '/admin/employers', icon: Building2 },
  { label: 'Consultations', href: '/admin/consultations', icon: Calendar },
  { label: 'Blogs', href: '/admin/blogs', icon: FileText },
  { label: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-light-bg">
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-navy border-r border-border overflow-y-auto">
        <div className="flex h-16 items-center justify-between px-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-accent-blue to-gold opacity-80" />
              <div className="absolute inset-[2px] rounded-sm bg-navy flex items-center justify-center">
                <span className="text-gold font-bold text-sm">W</span>
              </div>
            </div>
            <span className="font-bold text-text-dark">WRS Admin</span>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'bg-accent-blue text-white'
                  : 'text-text-soft hover:bg-white/10 hover:text-text-dark'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-text-soft hover:bg-white/10 hover:text-text-dark transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start text-text-soft hover:text-error-text hover:bg-error"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log Out
          </Button>
        </div>
      </aside>

      <main className="pl-64">
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200">
          <div className="flex h-full items-center justify-between px-8">
            <div>
              <h1 className="text-xl font-bold text-text-light capitalize">
                {pathname === '/admin' ? 'Dashboard' : pathname.split('/').pop()}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" target="_blank">
                <Button variant="outline" size="sm">
                  View Website
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-accent-blue flex items-center justify-center">
                  <span className="text-sm font-bold text-white">A</span>
                </div>
                <span className="text-sm font-medium text-text-light">Admin</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
