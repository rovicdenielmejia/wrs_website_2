'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Briefcase, Clock, Filter, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Mock data - Replace with API calls
const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Philippines',
    location: 'Makati City, Metro Manila',
    type: 'FULL_TIME',
    experienceLevel: 'SENIOR',
    salaryMin: 80000,
    salaryMax: 120000,
    salaryVisible: true,
    isUrgent: true,
    isFeatured: true,
    postedAt: '2 days ago',
    description: 'We are looking for a Senior Software Engineer to join our growing team...',
    categories: ['Technology', 'Software Development'],
  },
  {
    id: '2',
    title: 'HR Manager',
    company: 'Growth Solutions Inc.',
    location: 'Quezon City, Metro Manila',
    type: 'FULL_TIME',
    experienceLevel: 'MID',
    salaryMin: 50000,
    salaryMax: 75000,
    salaryVisible: true,
    isUrgent: false,
    isFeatured: true,
    postedAt: '1 week ago',
    description: 'Join our team as HR Manager and help shape our company culture...',
    categories: ['Human Resources'],
  },
  {
    id: '3',
    title: 'Digital Marketing Specialist',
    company: 'BrandWorks Agency',
    location: 'Remote',
    type: 'REMOTE',
    experienceLevel: 'JUNIOR',
    salaryMin: 30000,
    salaryMax: 45000,
    salaryVisible: true,
    isUrgent: false,
    isFeatured: false,
    postedAt: '3 days ago',
    description: 'We need a Digital Marketing Specialist to help grow our clients brands...',
    categories: ['Marketing', 'Digital'],
  },
  {
    id: '4',
    title: 'Account Executive',
    company: 'SalesPro BPO',
    location: 'Mandaluyong City, Metro Manila',
    type: 'FULL_TIME',
    experienceLevel: 'ENTRY',
    salaryMin: 25000,
    salaryMax: 40000,
    salaryVisible: true,
    isUrgent: true,
    isFeatured: false,
    postedAt: '1 day ago',
    description: 'Looking for enthusiastic account executives to join our sales team...',
    categories: ['Sales', 'BPO'],
  },
  {
    id: '5',
    title: 'Financial Analyst',
    company: 'FinServe Corp',
    location: 'Ortigas, Metro Manila',
    type: 'FULL_TIME',
    experienceLevel: 'MID',
    salaryMin: 55000,
    salaryMax: 80000,
    salaryVisible: true,
    isUrgent: false,
    isFeatured: false,
    postedAt: '5 days ago',
    description: 'Join our finance team as a Financial Analyst...',
    categories: ['Finance', 'Banking'],
  },
]

const jobTypes = [
  { value: 'ALL', label: 'All Types' },
  { value: 'FULL_TIME', label: 'Full Time' },
  { value: 'PART_TIME', label: 'Part Time' },
  { value: 'CONTRACT', label: 'Contract' },
  { value: 'REMOTE', label: 'Remote' },
  { value: 'INTERNSHIP', label: 'Internship' },
]

const experienceLevels = [
  { value: 'ALL', label: 'All Levels' },
  { value: 'ENTRY', label: 'Entry Level' },
  { value: 'JUNIOR', label: 'Junior' },
  { value: 'MID', label: 'Mid Level' },
  { value: 'SENIOR', label: 'Senior' },
  { value: 'EXECUTIVE', label: 'Executive' },
]

const locations = [
  { value: 'ALL', label: 'All Locations' },
  { value: 'METRO_MANILA', label: 'Metro Manila' },
  { value: 'CEBU', label: 'Cebu' },
  { value: 'DAVAO', label: 'Davao' },
  { value: 'REMOTE', label: 'Remote' },
]

const categories = [
  { value: 'ALL', label: 'All Categories' },
  { value: 'TECHNOLOGY', label: 'Technology' },
  { value: 'MARKETING', label: 'Marketing' },
  { value: 'SALES', label: 'Sales' },
  { value: 'HR', label: 'Human Resources' },
  { value: 'FINANCE', label: 'Finance' },
  { value: 'OPERATIONS', label: 'Operations' },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('ALL')
  const [selectedLevel, setSelectedLevel] = useState('ALL')
  const [selectedLocation, setSelectedLocation] = useState('ALL')
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = selectedType === 'ALL' || job.type === selectedType
    const matchesLevel = selectedLevel === 'ALL' || job.experienceLevel === selectedLevel
    const matchesLocation =
      selectedLocation === 'ALL' ||
      (selectedLocation === 'REMOTE' && job.location === 'Remote') ||
      (selectedLocation !== 'REMOTE' && job.location !== 'Remote')

    return matchesSearch && matchesType && matchesLevel && matchesLocation
  })

  const formatSalary = (min: number, max: number) => {
    return `₱${(min / 1000).toFixed(0)}K - ₱${(max / 1000).toFixed(0)}K`
  }

  const getTypeLabel = (type: string) => {
    return jobTypes.find((t) => t.value === type)?.label || type
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-gray-300 text-lg">
            Browse {mockJobs.length} job opportunities from top companies in the Philippines
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="container py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              className="lg:hidden gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
              {showFilters && <ChevronDown className="w-4 h-4" />}
            </Button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> jobs
          </p>
        </div>

        {filteredJobs.length === 0 ? (
          <Card className="p-12 text-center">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('')
                setSelectedType('ALL')
                setSelectedLevel('ALL')
                setSelectedLocation('ALL')
                setSelectedCategory('ALL')
              }}
            >
              Clear Filters
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Company Logo Placeholder */}
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                      <Briefcase className="w-7 h-7 text-gray-400" />
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {job.isFeatured && (
                          <Badge variant="gold" className="text-xs">Featured</Badge>
                        )}
                        {job.isUrgent && (
                          <Badge variant="destructive" className="text-xs">Urgent</Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {getTypeLabel(job.type)}
                        </Badge>
                      </div>

                      <Link href={`/jobs/${job.id}`}>
                        <h3 className="text-xl font-semibold text-navy hover:text-steel transition-colors mb-1">
                          {job.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 mb-3">{job.company}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {experienceLevels.find((l) => l.value === job.experienceLevel)?.label}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.postedAt}
                        </span>
                        {job.salaryVisible && (
                          <span className="text-gold font-medium">
                            {formatSalary(job.salaryMin, job.salaryMax)}/month
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col gap-2 shrink-0">
                      <Link href={`/jobs/${job.id}`}>
                        <Button variant="employer">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
