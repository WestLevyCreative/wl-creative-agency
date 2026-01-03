import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const applicationData = await request.json();
    
    // Basic validation
    const requiredFields = ['name', 'email', 'noticePeriod', 'message', 'jobId', 'jobTitle'];
    const missingFields = requiredFields.filter(field => !applicationData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In a real application, you would save to your database here
    // For now, we'll just log the application data
    console.log('New application received:', {
      ...applicationData,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: Math.floor(Math.random() * 10000) + 1
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // In a real application, you would fetch from your database here
    // For now, return a mock response
    return NextResponse.json({
      success: true,
      data: [],
      total: 0
    });
  } catch (error) {
    console.error('Get applications API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}